/* ═══════════════════════════════════════════════════════════
   FAZDETOON — main.js
   Scroll reveals · Sticky nav · Countdown · FAQ · Counters
═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────────────────────────────────────
     1. STICKY NAV
  ──────────────────────────────────────── */
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > 80) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
    lastScroll = current;
  }, { passive: true });

  /* Mobile nav toggle */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
    });
    /* Close on link click */
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  /* ────────────────────────────────────────
     2. SCROLL REVEAL (IntersectionObserver)
  ──────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => io.observe(el));
  }

  /* ────────────────────────────────────────
     3. ANIMATED COUNTERS
  ──────────────────────────────────────── */
  function animateCounter(el) {
    const target   = parseInt(el.getAttribute('data-target'), 10);
    const suffix   = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const step     = 16;
    const total    = Math.ceil(duration / step);
    let count      = 0;

    const easeOut = t => 1 - Math.pow(1 - t, 3);

    const interval = setInterval(() => {
      count++;
      const progress = easeOut(count / total);
      const value = Math.round(progress * target);
      el.textContent = value.toLocaleString('pt-BR') + suffix;
      if (count >= total) {
        el.textContent = target.toLocaleString('pt-BR') + suffix;
        clearInterval(interval);
      }
    }, step);
  }

  const counterEls = document.querySelectorAll('[data-target]');
  if (counterEls.length) {
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counterEls.forEach(el => counterIO.observe(el));
  }

  /* ────────────────────────────────────────
     4. COUNTDOWN TIMER
  ──────────────────────────────────────── */
  function getDeadline() {
    const key = 'fdt_deadline';
    let deadline = localStorage.getItem(key);
    if (!deadline) {
      /* 24 hours from first visit */
      deadline = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
      localStorage.setItem(key, deadline);
    }
    return new Date(deadline);
  }

  const timerEls = {
    h: document.querySelectorAll('.timer-h'),
    m: document.querySelectorAll('.timer-m'),
    s: document.querySelectorAll('.timer-s'),
  };

  function pad(n) { return String(n).padStart(2, '0'); }

  function updateTimer() {
    const deadline = getDeadline();
    const diff = deadline - Date.now();

    if (diff <= 0) {
      timerEls.h.forEach(el => el.textContent = '00');
      timerEls.m.forEach(el => el.textContent = '00');
      timerEls.s.forEach(el => el.textContent = '00');
      return;
    }

    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    timerEls.h.forEach(el => el.textContent = pad(h));
    timerEls.m.forEach(el => el.textContent = pad(m));
    timerEls.s.forEach(el => el.textContent = pad(s));
  }

  if (Object.values(timerEls).some(els => els.length)) {
    updateTimer();
    setInterval(updateTimer, 1000);
  }

  /* ────────────────────────────────────────
     5. FAQ ACCORDION
  ──────────────────────────────────────── */
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item    = trigger.closest('.accordion-item');
      const isOpen  = item.classList.contains('open');
      /* Close all */
      document.querySelectorAll('.accordion-item.open').forEach(el => el.classList.remove('open'));
      /* Open clicked (if was closed) */
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ────────────────────────────────────────
     6. SMOOTH SCROLL FOR ANCHOR LINKS
  ──────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id  = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = nav ? nav.offsetHeight + 16 : 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    });
  });

  /* ────────────────────────────────────────
     7. MODULE CARDS FLIP ON CLICK (mobile)
  ──────────────────────────────────────── */
  document.querySelectorAll('.module-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
  });

  /* ────────────────────────────────────────
     8. STAR RATING DISPLAY
  ──────────────────────────────────────── */
  document.querySelectorAll('.stars[data-rating]').forEach(el => {
    const rating = parseFloat(el.getAttribute('data-rating'));
    const full   = Math.floor(rating);
    const half   = rating % 1 >= 0.5 ? 1 : 0;
    const empty  = 5 - full - half;
    el.innerHTML =
      '★'.repeat(full) +
      (half ? '⯨' : '') +
      '<span style="opacity:.3">' + '★'.repeat(empty) + '</span>';
  });

  /* ────────────────────────────────────────
     9. VIDEO MODAL PLACEHOLDER
  ──────────────────────────────────────── */
  const playBtn = document.getElementById('play-btn');
  const modal   = document.getElementById('video-modal');
  const closeModal = document.getElementById('close-modal');

  if (playBtn && modal) {
    playBtn.addEventListener('click', () => {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    function closeVid() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
    if (closeModal) closeModal.addEventListener('click', closeVid);
    modal.addEventListener('click', e => { if (e.target === modal) closeVid(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVid(); });
  }

  /* ────────────────────────────────────────
     10. TESTIMONIAL SLIDER (simple)
  ──────────────────────────────────────── */
  const track    = document.querySelector('.testimonial-track');
  const prevBtn  = document.getElementById('testi-prev');
  const nextBtn  = document.getElementById('testi-next');

  if (track && prevBtn && nextBtn) {
    let currentIdx = 0;
    const cards    = track.querySelectorAll('.testi-card');
    const total    = cards.length;

    function updateSlider() {
      const cardW = cards[0].offsetWidth + 24; /* gap */
      track.style.transform = `translateX(-${currentIdx * cardW}px)`;
    }

    nextBtn.addEventListener('click', () => {
      currentIdx = (currentIdx + 1) % total;
      updateSlider();
    });
    prevBtn.addEventListener('click', () => {
      currentIdx = (currentIdx - 1 + total) % total;
      updateSlider();
    });

    window.addEventListener('resize', updateSlider);
  }

  /* ────────────────────────────────────────
     11. PRICING CTA — pulse on hover
  ──────────────────────────────────────── */
  const pricingCta = document.querySelector('.pricing-cta');
  if (pricingCta) {
    let pulseTimer;
    function startPulse() {
      pulseTimer = setInterval(() => {
        pricingCta.classList.add('pulse');
        setTimeout(() => pricingCta.classList.remove('pulse'), 500);
      }, 3000);
    }
    startPulse();
  }

});
