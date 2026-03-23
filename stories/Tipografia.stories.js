export default {
  title: 'Fundamentos/Tipografia',
  parameters: { docs: { description: { component: '3 famílias com papéis distintos. Bangers = branding; Fredoka = headings; Nunito = body text.' } } },
};

export const Familias = {
  name: '🔤 Famílias',
  render: () => `<div style="display:flex;flex-direction:column;gap:2rem;">
    <div>
      <div style="font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--text-light);margin-bottom:.5rem;">Bangers — var(--font-brand)</div>
      <div style="font-family:var(--font-brand);font-size:3.5rem;letter-spacing:.06em;line-height:1;">FAZDETOON 2026</div>
      <div style="font-size:.8rem;color:var(--text-muted);margin-top:.4rem;">Uso: Logo, nome do professor, countdown, contadores</div>
    </div>
    <div style="border-top:1px solid var(--border);padding-top:2rem;">
      <div style="font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--text-light);margin-bottom:.5rem;">Fredoka — var(--font-head)</div>
      <div style="font-family:var(--font-head);font-size:2.5rem;font-weight:700;line-height:1.2;">Aprenda a criar personagens</div>
      <div style="font-size:.8rem;color:var(--text-muted);margin-top:.4rem;">Uso: Títulos de seção, headings, CTAs, nav, FAQ, botões</div>
    </div>
    <div style="border-top:1px solid var(--border);padding-top:2rem;">
      <div style="font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--text-light);margin-bottom:.5rem;">Nunito — var(--font-body)</div>
      <div style="font-size:1.05rem;color:var(--text-muted);line-height:1.75;max-width:55ch;">O método passo a passo para dominar a criação de personagens do zero — mesmo que você nunca tenha desenhado antes. Desenvolvido por quem já formou mais de 2.400 alunos.</div>
      <div style="font-size:.8rem;color:var(--text-muted);margin-top:.4rem;">Uso: Texto corrido, legendas, labels, parágrafos, inputs</div>
    </div>
  </div>`,
};

export const Escala = {
  name: '📏 Escala de Tamanhos',
  render: () => `<div style="display:flex;flex-direction:column;">
    ${[
      ['clamp(2.5rem,5.5vw,4rem)', 'Hero Title', 'Aprenda'],
      ['clamp(1.85rem,4vw,2.75rem)', 'Section Title', 'O que você vai aprender'],
      ['1.25rem', 'Card Title', 'Módulo 1 — Fundamentos'],
      ['1.1rem', 'Body Large', 'Descrição principal da seção para visitantes.'],
      ['1rem', 'Body', 'Texto corrido padrão da página e componentes.'],
      ['.875rem', 'Small', 'Notas, metadados e detalhes secundários.'],
      ['.72rem + uppercase', 'Label', 'MÉTODO EXCLUSIVO · RESULTADOS EM 7 DIAS'],
    ].map(([size, name, sample]) => `
      <div style="display:flex;align-items:baseline;gap:1.5rem;padding:.875rem 0;border-bottom:1px solid var(--border);">
        <div style="min-width:200px;font-family:monospace;font-size:.72rem;color:var(--text-light);">${size}<br><strong style="color:var(--text-muted)">${name}</strong></div>
        <div style="font-family:var(--font-head);font-size:min(${size.includes('clamp')?'2rem':size},.8 * 100vw);font-weight:700;color:var(--text);">${sample}</div>
      </div>
    `).join('')}
  </div>`,
};
