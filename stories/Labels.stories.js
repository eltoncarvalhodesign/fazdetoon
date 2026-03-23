export default {
  title: 'Componentes/Labels & Badges',
  parameters: { docs: { description: { component: 'Labels e badges para categorização, status e eyebrow headers.' } } },
};

export const AllLabels = {
  name: '🏷️ Todas as Variantes',
  render: () => `<div style="display:flex;gap:.75rem;flex-wrap:wrap;align-items:center;">
    <span class="label">Default</span>
    <span class="label label-accent">✨ Método exclusivo</span>
    <span class="label label-green">✓ Garantia 7 dias</span>
    <span class="label label-dark">Novo</span>
    <span class="label label-danger">Oferta encerrada</span>
  </div>`,
};

export const AsEyebrow = {
  name: '📌 Como Eyebrow',
  render: () => `<div style="display:flex;flex-direction:column;gap:1.5rem;max-width:480px;">
    <div>
      <span class="label label-accent" style="margin-bottom:.875rem;display:inline-flex;">✨ Módulos do Curso</span>
      <div style="font-family:var(--font-head);font-size:1.85rem;font-weight:700;line-height:1.2;color:var(--text);">O que você vai aprender</div>
    </div>
    <div>
      <span class="label label-green" style="margin-bottom:.875rem;display:inline-flex;">Garantia</span>
      <div style="font-family:var(--font-head);font-size:1.85rem;font-weight:700;line-height:1.2;color:var(--text);">Satisfação ou dinheiro de volta</div>
    </div>
  </div>`,
};
