/* =========================================================
   FAZDETOON · v2 — Ultra-smooth GSAP frame-sequence canvas
   ---------------------------------------------------------
   - Preload 240 frames per sequence.
   - Draw each frame to a pinned canvas based on scroll progress.
   - Section height is sized from JS so the user gets ~5px of
     scroll per frame, giving the animation room to breathe.
   - Lenis powers buttery-smooth inertial scroll.
   - A short loader holds the page until the first sequence is
     ready, so the first frame paints immediately.
   ========================================================= */

const FRAME_COUNT = 240;
const SCROLL_PIXELS_PER_FRAME = 5; // → 240 frames * 5px = 1200px of scroll per section

gsap.registerPlugin(ScrollTrigger);

/* ---------- Lenis smooth scroll bound to GSAP's ticker ---------- */
const lenis = new Lenis({
  duration: 1.15,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expoOut
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1,
  touchMultiplier: 1.2,
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

/* ---------- Frame loader ---------- */
function makeFrameUrl(slug, idx) {
  // Frames are 4-digit padded JPGs starting at 0001.
  const n = String(idx + 1).padStart(4, '0');
  return `assets/frames/${slug}/${n}.jpg`;
}

function loadSequence(slug, onProgress) {
  const images = new Array(FRAME_COUNT);
  let loaded = 0;
  return new Promise((resolve) => {
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = 'async';
      img.src = makeFrameUrl(slug, i);
      img.onload = img.onerror = () => {
        loaded += 1;
        if (onProgress) onProgress(loaded, FRAME_COUNT);
        if (loaded === FRAME_COUNT) resolve(images);
      };
      images[i] = img;
    }
  });
}

/* ---------- Canvas frame renderer ---------- */
function createRenderer(canvas, images) {
  const ctx = canvas.getContext('2d', { alpha: false });
  let lastFrame = -1;

  const resize = () => {
    // Match the canvas backing store to its CSS size × DPR for crisp drawing.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    lastFrame = -1; // force repaint
    if (images[0]) draw(currentFrameIdx());
  };

  let _frame = 0;
  const currentFrameIdx = () => _frame;

  const draw = (frameIdx) => {
    const idx = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(frameIdx)));
    if (idx === lastFrame) return;
    const img = images[idx];
    if (!img || !img.complete || !img.naturalWidth) return;
    _frame = idx;
    lastFrame = idx;

    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // object-fit: cover — fill the canvas and crop the overflow.
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  resize();
  window.addEventListener('resize', resize, { passive: true });
  return { draw };
}

/* ---------- Wire a section to a sequence with ScrollTrigger ---------- */
function attachScrollTrigger(section, renderer) {
  // Stretch the section so there's room for the full sequence to play.
  const minHeight = window.innerHeight + FRAME_COUNT * SCROLL_PIXELS_PER_FRAME;
  section.style.minHeight = `${minHeight}px`;

  // Frame proxy lets GSAP tween the frame value, which smooths small jitters
  // when scroll input is noisy.
  const proxy = { frame: 0 };

  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.4, // small lag = ultra-smooth interpolation
    onUpdate(self) {
      const target = self.progress * (FRAME_COUNT - 1);
      // Tween the proxy toward the target; gsap.ticker drives the redraw.
      gsap.to(proxy, {
        frame: target,
        duration: 0.45,
        ease: 'power2.out',
        overwrite: true,
        onUpdate: () => renderer.draw(proxy.frame),
      });
    },
  });
}

/* ---------- Loader UI ---------- */
const loaderEl = document.getElementById('loader');
const loaderBar = document.getElementById('loader-bar');
const loaderPct = document.getElementById('loader-pct');

function updateLoader(loaded, total) {
  const pct = Math.round((loaded / total) * 100);
  loaderBar.style.width = `${pct}%`;
  loaderPct.textContent = `${pct}%`;
}

/* ---------- Boot ---------- */
async function boot() {
  const sections = Array.from(document.querySelectorAll('.scroll-section'));
  if (!sections.length) return;

  // Loader tracks both sequences together (480 images total).
  const totalImages = sections.length * FRAME_COUNT;
  let totalLoaded = 0;
  const onProgress = () => {
    totalLoaded += 1;
    updateLoader(totalLoaded, totalImages);
  };

  // Kick off all sequences in parallel and wait for the FIRST one to finish
  // before revealing the page — keeps the hero snappy without blocking too long.
  const sequencePromises = sections.map((s) =>
    loadSequence(s.dataset.frames, onProgress)
  );

  const firstSequence = await sequencePromises[0];

  // First sequence ready: paint frame 0, hide the loader, mount the trigger.
  const firstSection = sections[0];
  const firstCanvas = document.getElementById(firstSection.dataset.canvas);
  const firstRenderer = createRenderer(firstCanvas, firstSequence);
  firstRenderer.draw(0);

  loaderEl.classList.add('is-done');
  lenis.start();

  attachScrollTrigger(firstSection, firstRenderer);

  // Mount the remaining sequences as each finishes loading.
  for (let i = 1; i < sections.length; i++) {
    const section = sections[i];
    const canvas = document.getElementById(section.dataset.canvas);
    const images = await sequencePromises[i];
    const renderer = createRenderer(canvas, images);
    renderer.draw(0);
    attachScrollTrigger(section, renderer);
  }

  // Final layout pass so ScrollTrigger pinning measurements line up.
  ScrollTrigger.refresh();
}

document.addEventListener('DOMContentLoaded', boot);
