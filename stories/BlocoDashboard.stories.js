export default {
  title: 'Blocos/Dashboard',
  parameters: { docs: { description: { component: 'Bloco de dashboard para a área de membros do Fazdetoon. Composto por stat cards, progresso geral e atividade recente.' } } },
};

export const StatsRow = {
  name: '📊 Linha de Stats',
  render: () => `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;max-width:800px;">
    ${[
      { icon: '🎓', num: '8', label: 'Módulos', sub: 'disponíveis', color: 'var(--accent)' },
      { icon: '✅', num: '5', label: 'Aulas', sub: 'concluídas', color: 'var(--green)' },
      { icon: '⏱️', num: '3h 20m', label: 'Assistidas', sub: 'esta semana', color: 'var(--blue)' },
      { icon: '📈', num: '65%', label: 'Progresso', sub: 'geral', color: 'var(--accent)' },
    ].map(s => `
      <div class="card-white" style="text-align:center;padding:1.25rem 1rem;">
        <div style="font-size:1.75rem;margin-bottom:.5rem;">${s.icon}</div>
        <div style="font-family:var(--font-brand);font-size:2rem;letter-spacing:.04em;color:var(--text);">${s.num}</div>
        <div style="font-family:var(--font-head);font-weight:600;font-size:.9rem;color:var(--text);">${s.label}</div>
        <div style="font-size:.72rem;color:var(--text-light);">${s.sub}</div>
      </div>
    `).join('')}
  </div>`,
};

export const RecentActivity = {
  name: '🕐 Atividade Recente',
  render: () => `<div style="max-width:480px;">
    <div style="font-family:var(--font-head);font-weight:700;font-size:1.1rem;margin-bottom:1rem;">Atividade recente</div>
    <div style="display:flex;flex-direction:column;gap:.5rem;">
      ${[
        { icon: '✅', text: 'Aula 3 — Proporções concluída', time: 'Há 2h', color: 'var(--green)' },
        { icon: '▶️', text: 'Iniciou Aula 4 — Expressões', time: 'Há 2h30', color: 'var(--blue)' },
        { icon: '🏆', text: 'Módulo 1 concluído!', time: 'Ontem', color: 'var(--accent-dark)' },
        { icon: '📝', text: 'Aula 2 — Rascunhos concluída', time: '2 dias atrás', color: 'var(--green)' },
      ].map(a => `
        <div style="display:flex;align-items:center;gap:.875rem;padding:.875rem 1rem;background:#fff;border:1px solid var(--border);border-radius:var(--radius-md);">
          <span style="font-size:1.1rem;">${a.icon}</span>
          <span style="flex:1;font-size:.875rem;color:var(--text-2);">${a.text}</span>
          <span style="font-size:.72rem;color:var(--text-light);white-space:nowrap;">${a.time}</span>
        </div>
      `).join('')}
    </div>
  </div>`,
};
