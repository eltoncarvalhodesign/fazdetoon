export default {
  title: 'Componentes/Progress',
  parameters: { docs: { description: { component: 'Barras de progresso lineares e circulares. Usadas em cards de aula e dashboard da área de membros.' } } },
};

export const Linear = {
  name: '📊 Linear',
  render: () => `<div style="max-width:400px;display:flex;flex-direction:column;gap:1.5rem;">
    ${[0,25,65,100].map(pct => `
      <div>
        <div style="display:flex;justify-content:space-between;font-size:.72rem;font-weight:700;color:var(--text-light);margin-bottom:.4rem;">
          <span>${pct === 100 ? '✅ Concluído' : pct === 0 ? 'Não iniciado' : 'Em progresso'}</span>
          <span>${pct}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill ${pct===100?'green':''}" style="width:${pct}%"></div>
        </div>
      </div>
    `).join('')}
  </div>`,
};

export const Circular = {
  name: '🔵 Circular (SVG)',
  render: () => `<div style="display:flex;gap:2rem;flex-wrap:wrap;">
    ${[33,65,100].map(pct => {
      const r = 36, c = 2 * Math.PI * r;
      const dash = (pct / 100) * c;
      return `<div style="text-align:center;">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="${r}" fill="none" stroke="var(--bg-alt)" stroke-width="8"/>
          <circle cx="50" cy="50" r="${r}" fill="none"
            stroke="${pct===100?'var(--green)':'var(--accent)'}" stroke-width="8"
            stroke-dasharray="${dash} ${c}"
            stroke-dashoffset="0"
            transform="rotate(-90 50 50)"
            stroke-linecap="round"/>
          <text x="50" y="54" text-anchor="middle"
            style="font-family:var(--font-brand);font-size:18px;fill:var(--text);">${pct}%</text>
        </svg>
        <div style="font-size:.72rem;color:var(--text-light);margin-top:.25rem;">${pct===100?'Concluído':pct+'% feito'}</div>
      </div>`;
    }).join('')}
  </div>`,
};
