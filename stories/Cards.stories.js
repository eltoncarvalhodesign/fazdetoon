export default {
  title: 'Componentes/Cards',
  parameters: { docs: { description: { component: 'Cards em três variantes de fundo. Todos levantam levemente no hover via spring easing.' } } },
};

export const Cream = {
  name: '🟤 Cream (card)',
  render: () => `<div class="card" style="max-width:320px;">
    <div style="font-size:1.5rem;margin-bottom:.75rem;">🎨</div>
    <div style="font-family:var(--font-head);font-weight:600;font-size:1.05rem;margin-bottom:.4rem;">Módulo 1 — Fundamentos</div>
    <div style="font-size:.9rem;color:var(--text-muted);line-height:1.6;">Aprenda os princípios do design de personagens rubber hose clássico.</div>
  </div>`,
};

export const White = {
  name: '⬜ White (card-white)',
  parameters: { backgrounds: { default: 'alt' } },
  render: () => `<div class="card-white" style="max-width:320px;">
    <div style="font-size:1.5rem;margin-bottom:.75rem;">💡</div>
    <div style="font-family:var(--font-head);font-weight:600;font-size:1.05rem;margin-bottom:.4rem;">Pricing Card</div>
    <div style="font-size:.9rem;color:var(--text-muted);line-height:1.6;">Fundo branco para destacar sobre fundos creme.</div>
  </div>`,
};

export const Dark = {
  name: '⬛ Dark (card-dark)',
  parameters: { backgrounds: { default: 'dark' } },
  render: () => `<div class="card-dark" style="max-width:320px;">
    <div style="font-size:1.5rem;margin-bottom:.75rem;">⭐</div>
    <div style="font-family:var(--font-head);font-weight:600;font-size:1.05rem;margin-bottom:.4rem;color:var(--text-inv);">Bônus Exclusivo</div>
    <div style="font-size:.9rem;color:var(--text-muted);line-height:1.6;">Usado dentro de seções com fundo escuro.</div>
  </div>`,
};

export const LessonCard = {
  name: '📚 Lesson Card',
  render: () => `<div class="card-white" style="max-width:340px;">
    <div style="aspect-ratio:16/9;background:var(--bg-dark);border-radius:var(--radius-md);margin-bottom:1rem;display:flex;align-items:center;justify-content:center;font-size:2rem;">🎬</div>
    <span class="label label-accent" style="margin-bottom:.75rem;display:inline-flex;">Módulo 2</span>
    <div style="font-family:var(--font-head);font-weight:600;font-size:1rem;margin-bottom:.5rem;">Proporções e Construção</div>
    <div style="font-size:.82rem;color:var(--text-muted);margin-bottom:.875rem;">12 aulas · 2h 34min</div>
    <div class="progress-wrap">
      <div style="display:flex;justify-content:space-between;font-size:.72rem;font-weight:700;color:var(--text-light);margin-bottom:.35rem;">
        <span>Progresso</span><span>65%</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:65%"></div></div>
    </div>
  </div>`,
};

export const StatsCard = {
  name: '📊 Stats Card',
  render: () => `<div style="display:flex;gap:1rem;flex-wrap:wrap;">
    ${[
      { icon: '👥', num: '2.400+', label: 'Alunos' },
      { icon: '⭐', num: '4,9', label: 'Avaliação' },
      { icon: '🎓', num: '8', label: 'Módulos' },
      { icon: '✅', num: '97%', label: 'Recomendam' },
    ].map(s => `
      <div class="card" style="flex:1;min-width:140px;text-align:center;">
        <div style="font-size:1.5rem;margin-bottom:.5rem;">${s.icon}</div>
        <div style="font-family:var(--font-brand);font-size:2rem;letter-spacing:.04em;color:var(--text);">${s.num}</div>
        <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--text-light);margin-top:.25rem;">${s.label}</div>
      </div>
    `).join('')}
  </div>`,
};
