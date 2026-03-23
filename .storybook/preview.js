/** @type { import('@storybook/html').Preview } */

// Import Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Bangers&family=Fredoka:wght@300;400;500;600;700&family=Nunito:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Inject design tokens globally
const style = document.createElement('style');
style.textContent = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:           #FDFCF8;
    --bg-alt:       #F5F1E8;
    --bg-dark:      #1C1814;
    --bg-dark-alt:  #252018;
    --text:         #1C1814;
    --text-2:       #3D3529;
    --text-muted:   #6B6055;
    --text-light:   #A09080;
    --text-inv:     #F5F1E8;
    --accent:       #F5D000;
    --accent-dark:  #C8AA00;
    --accent-soft:  rgba(245,208,0,.12);
    --border:       #E4DDD0;
    --border-dark:  #2E2820;
    --green:        #22A06B;
    --red-soft:     #C94040;
    --blue:         #2563EB;
    --font-brand:   'Bangers', cursive;
    --font-head:    'Fredoka', sans-serif;
    --font-body:    'Nunito', sans-serif;
    --radius-sm:    .5rem;
    --radius-md:    .875rem;
    --radius-lg:    1.25rem;
    --radius-xl:    1.75rem;
    --radius-full:  999px;
    --shadow-xs:    0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04);
    --shadow-sm:    0 2px 8px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.04);
    --shadow-md:    0 4px 16px rgba(0,0,0,.07), 0 2px 6px rgba(0,0,0,.04);
    --shadow-lg:    0 8px 32px rgba(0,0,0,.09), 0 4px 12px rgba(0,0,0,.05);
    --ease:         cubic-bezier(0.4, 0, 0.2, 1);
    --ease-out:     cubic-bezier(0, 0, 0.2, 1);
    --ease-spring:  cubic-bezier(0.34, 1.4, 0.64, 1);
  }

  body {
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.65;
    color: var(--text);
    background: var(--bg);
    -webkit-font-smoothing: antialiased;
  }

  /* ── Buttons ── */
  .btn {
    display: inline-flex; align-items: center; justify-content: center; gap: .5rem;
    font-family: var(--font-head); font-size: 1rem; font-weight: 600; line-height: 1;
    padding: .85rem 2rem; border-radius: var(--radius-full);
    border: 1.5px solid transparent; cursor: pointer; white-space: nowrap;
    transition: background .18s var(--ease), box-shadow .18s var(--ease), transform .18s var(--ease-spring);
    text-decoration: none;
  }
  .btn:hover  { transform: translateY(-1px); }
  .btn:active { transform: translateY(0); }
  .btn:disabled { opacity: .45; cursor: not-allowed; pointer-events: none; }
  .btn-primary { background: var(--accent); color: var(--text); border-color: var(--accent-dark); box-shadow: 0 2px 0 var(--accent-dark), var(--shadow-sm); }
  .btn-primary:hover { background: #f0c800; box-shadow: 0 3px 0 var(--accent-dark), var(--shadow-md); }
  .btn-dark { background: var(--bg-dark); color: var(--text-inv); border-color: var(--bg-dark); box-shadow: var(--shadow-sm); }
  .btn-dark:hover { background: var(--bg-dark-alt); box-shadow: var(--shadow-md); }
  .btn-ghost { background: transparent; color: var(--text-muted); border-color: var(--border); }
  .btn-ghost:hover { border-color: var(--text-muted); color: var(--text); }
  .btn-danger { background: var(--red-soft); color: #fff; border-color: #a83030; box-shadow: 0 2px 0 #a83030, var(--shadow-sm); }
  .btn-danger:hover { background: #b83838; }
  .btn-ghost-inv { background: transparent; color: rgba(255,255,255,.7); border-color: rgba(255,255,255,.2); }
  .btn-ghost-inv:hover { color: var(--text-inv); border-color: rgba(255,255,255,.5); }
  .btn-xl  { font-size: 1.1rem; padding: 1.1rem 2.75rem; }
  .btn-lg  { font-size: 1.05rem; padding: 1rem 2.5rem; }
  .btn-sm  { font-size: .875rem; padding: .65rem 1.5rem; }

  /* ── Labels ── */
  .label {
    display: inline-flex; align-items: center; gap: .4rem;
    font-family: var(--font-body); font-size: .72rem; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    padding: .35rem .85rem; border-radius: var(--radius-full);
    border: 1px solid var(--border); color: var(--text-muted); background: var(--bg);
  }
  .label-accent { background: var(--accent-soft); border-color: rgba(245,208,0,.3); color: #7A6400; }
  .label-dark   { background: var(--bg-dark); border-color: var(--bg-dark); color: var(--text-inv); }
  .label-green  { background: rgba(34,160,107,.08); border-color: rgba(34,160,107,.2); color: #1a7a52; }
  .label-danger { background: rgba(201,64,64,.08); border-color: rgba(201,64,64,.2); color: #a83030; }

  /* ── Cards ── */
  .card {
    background: var(--bg); border: 1px solid var(--border);
    border-radius: var(--radius-lg); padding: 1.75rem;
    box-shadow: var(--shadow-xs);
    transition: box-shadow .2s var(--ease), transform .2s var(--ease-spring);
  }
  .card:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); }
  .card-white {
    background: #fff; border: 1px solid var(--border);
    border-radius: var(--radius-lg); padding: 1.75rem; box-shadow: var(--shadow-sm);
    transition: box-shadow .2s var(--ease), transform .2s var(--ease-spring);
  }
  .card-white:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); }
  .card-dark {
    background: var(--bg-dark-alt); border: 1px solid var(--border-dark);
    border-radius: var(--radius-lg); padding: 1.75rem; color: var(--text-inv);
  }

  /* ── FAQ Accordion ── */
  .faq-item { border-bottom: 1px solid var(--border); }
  .faq-item:first-child { border-top: 1px solid var(--border); }
  .faq-q {
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.2rem 0; cursor: pointer; user-select: none;
    font-family: var(--font-head); font-size: 1rem; font-weight: 600; color: var(--text);
    gap: 1.5rem;
  }
  .faq-icon {
    width: 24px; height: 24px; min-width: 24px;
    border: 1.5px solid var(--border); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: .9rem; font-weight: 700; color: var(--text-muted);
    transition: transform .3s var(--ease), background .2s, border-color .2s; flex-shrink: 0;
  }
  .faq-item.open .faq-icon { transform: rotate(45deg); background: var(--accent); border-color: var(--accent-dark); color: var(--text); }
  .faq-body-wrap { max-height: 0; overflow: hidden; transition: max-height .35s var(--ease-out); }
  .faq-item.open .faq-body-wrap { max-height: 300px; }
  .faq-body { padding-bottom: 1.25rem; font-size: .95rem; color: var(--text-muted); line-height: 1.75; }

  /* ── Countdown ── */
  .countdown { display: flex; align-items: center; gap: .6rem; }
  .cd-unit { text-align: center; }
  .cd-num { font-family: var(--font-brand); font-size: 2.25rem; letter-spacing: .03em; background: var(--bg-dark); color: var(--accent); border-radius: var(--radius-sm); padding: .2rem .7rem; min-width: 3ch; display: inline-block; line-height: 1.15; }
  .cd-label { font-size: .6rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--text-light); margin-top: .25rem; }
  .cd-sep { font-family: var(--font-brand); font-size: 1.75rem; color: var(--text-light); margin-bottom: 1rem; }

  /* ── Inputs ── */
  .input-wrap { display: flex; flex-direction: column; gap: .4rem; }
  .input-label { font-size: .82rem; font-weight: 700; color: var(--text-2); }
  .input {
    width: 100%; padding: .75rem 1rem;
    font-family: var(--font-body); font-size: .95rem; color: var(--text);
    background: #fff; border: 1.5px solid var(--border);
    border-radius: var(--radius-md); outline: none;
    transition: border-color .15s, box-shadow .15s;
  }
  .input:focus { border-color: var(--accent-dark); box-shadow: 0 0 0 3px var(--accent-soft); }
  .input.error { border-color: var(--red-soft); }
  .input.error:focus { box-shadow: 0 0 0 3px rgba(201,64,64,.12); }
  .input:disabled { opacity: .5; cursor: not-allowed; background: var(--bg-alt); }
  .input-hint { font-size: .78rem; color: var(--text-light); }
  .input-error { font-size: .78rem; color: var(--red-soft); }

  /* ── Alert ── */
  .alert {
    display: flex; gap: .875rem; padding: 1rem 1.25rem;
    border-radius: var(--radius-md); border: 1px solid; align-items: flex-start;
  }
  .alert-success { background: rgba(34,160,107,.06); border-color: rgba(34,160,107,.25); color: #1a7a52; }
  .alert-warning { background: rgba(245,208,0,.1); border-color: rgba(245,208,0,.4); color: #7A6400; }
  .alert-error   { background: rgba(201,64,64,.06); border-color: rgba(201,64,64,.25); color: #a83030; }
  .alert-info    { background: rgba(37,99,235,.06); border-color: rgba(37,99,235,.2); color: #1d4ed8; }
  .alert-title   { font-weight: 700; font-size: .9rem; margin-bottom: .2rem; }
  .alert-body    { font-size: .875rem; line-height: 1.6; opacity: .85; }

  /* ── Avatar ── */
  .avatar { border-radius: 50%; object-fit: cover; display: inline-block; background: var(--bg-alt); flex-shrink: 0; }
  .avatar-xs { width: 24px; height: 24px; }
  .avatar-sm { width: 32px; height: 32px; }
  .avatar-md { width: 40px; height: 40px; }
  .avatar-lg { width: 56px; height: 56px; }
  .avatar-xl { width: 80px; height: 80px; }
  .avatar-initials {
    border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;
    font-family: var(--font-head); font-weight: 600; background: var(--accent-soft);
    color: var(--accent-dark); border: 1.5px solid rgba(245,208,0,.3);
  }

  /* ── Progress ── */
  .progress-wrap { width: 100%; }
  .progress-bar { width: 100%; height: 8px; background: var(--bg-alt); border-radius: var(--radius-full); overflow: hidden; }
  .progress-fill { height: 100%; background: var(--accent); border-radius: var(--radius-full); transition: width .4s var(--ease); }
  .progress-fill.green { background: var(--green); }

  /* ── Skeleton ── */
  @keyframes shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position: 600px 0; }
  }
  .skeleton {
    background: linear-gradient(90deg, var(--bg-alt) 25%, #ede9de 50%, var(--bg-alt) 75%);
    background-size: 600px 100%;
    animation: shimmer 1.5s infinite linear;
    border-radius: var(--radius-sm);
  }
`;
document.head.appendChild(style);

const preview = {
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'cream',
      values: [
        { name: 'cream',  value: '#FDFCF8' },
        { name: 'alt',    value: '#F5F1E8' },
        { name: 'dark',   value: '#1C1814' },
        { name: 'white',  value: '#FFFFFF' },
      ],
    },
    docs: {
      story: { inline: true },
    },
  },
};

export default preview;
