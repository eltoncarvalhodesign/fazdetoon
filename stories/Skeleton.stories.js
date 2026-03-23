export default {
  title: 'Componentes/Skeleton',
  parameters: { docs: { description: { component: 'Placeholders animados (shimmer) para estados de carregamento. Usados na área de membros enquanto dados carregam.' } } },
};

export const Text = {
  name: '📝 Texto',
  render: () => `<div style="max-width:400px;display:flex;flex-direction:column;gap:.6rem;">
    <div class="skeleton" style="height:24px;width:60%;"></div>
    <div class="skeleton" style="height:16px;width:100%;"></div>
    <div class="skeleton" style="height:16px;width:90%;"></div>
    <div class="skeleton" style="height:16px;width:75%;"></div>
  </div>`,
};

export const CardSkeleton = {
  name: '🃏 Card',
  render: () => `<div style="display:flex;gap:1rem;flex-wrap:wrap;">
    ${[1,2,3].map(() => `
      <div style="background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.5rem;width:220px;">
        <div class="skeleton" style="height:120px;border-radius:var(--radius-md);margin-bottom:1rem;"></div>
        <div class="skeleton" style="height:14px;width:50%;margin-bottom:.5rem;"></div>
        <div class="skeleton" style="height:20px;width:90%;margin-bottom:.75rem;"></div>
        <div class="skeleton" style="height:12px;width:70%;"></div>
      </div>
    `).join('')}
  </div>`,
};

export const ListSkeleton = {
  name: '📋 Lista',
  render: () => `<div style="max-width:440px;display:flex;flex-direction:column;gap:.875rem;">
    ${[1,2,3,4].map(() => `
      <div style="display:flex;align-items:center;gap:1rem;padding:.875rem 1rem;background:#fff;border:1px solid var(--border);border-radius:var(--radius-md);">
        <div class="skeleton" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;"></div>
        <div style="flex:1;display:flex;flex-direction:column;gap:.4rem;">
          <div class="skeleton" style="height:14px;width:55%;"></div>
          <div class="skeleton" style="height:12px;width:80%;"></div>
        </div>
        <div class="skeleton" style="height:28px;width:72px;border-radius:var(--radius-full);"></div>
      </div>
    `).join('')}
  </div>`,
};
