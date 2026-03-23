export default {
  title: 'Componentes/Countdown',
  parameters: { docs: { description: { component: 'Timer de urgência regressivo. Persiste em localStorage (chave fdt_deadline). Números em Bangers sobre fundo escuro com acento amarelo.' } } },
};

export const Default = {
  name: '⏱️ Countdown Timer',
  render: () => {
    const key = 'fdt_deadline_sb';
    let deadline = localStorage.getItem(key);
    if (!deadline) {
      deadline = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
      localStorage.setItem(key, deadline);
    }
    const id = 'cd-' + Math.random().toString(36).slice(2);
    setTimeout(() => {
      const dl = new Date(deadline);
      const pad = n => String(n).padStart(2,'0');
      setInterval(() => {
        const diff = dl - Date.now();
        if (diff <= 0) return;
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        const el = document.getElementById(id);
        if (!el) return;
        el.querySelectorAll('[data-cd]').forEach(e => {
          if (e.dataset.cd === 'h') e.textContent = pad(h);
          if (e.dataset.cd === 'm') e.textContent = pad(m);
          if (e.dataset.cd === 's') e.textContent = pad(s);
        });
      }, 1000);
    }, 50);

    return `<div id="${id}">
      <div style="font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--text-light);margin-bottom:.875rem;">⚡ Oferta encerra em:</div>
      <div class="countdown">
        <div class="cd-unit"><div class="cd-num" data-cd="h">23</div><div class="cd-label">Horas</div></div>
        <div class="cd-sep">:</div>
        <div class="cd-unit"><div class="cd-num" data-cd="m">59</div><div class="cd-label">Min</div></div>
        <div class="cd-sep">:</div>
        <div class="cd-unit"><div class="cd-num" data-cd="s">59</div><div class="cd-label">Seg</div></div>
      </div>
    </div>`;
  },
};
