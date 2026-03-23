export default {
  title: 'Fundamentos/Cores',
  parameters: { docs: { description: { component: 'Paleta quente e sóbria. Fundo creme, escuro profundo e amarelo como único acento vibrante. Use o amarelo com parcimônia — apenas em CTAs e momentos de destaque.' } } },
};

const swatchGroup = (title, tokens) => `
  <div style="margin-bottom:2rem;">
    <div style="font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--text-light);margin-bottom:.75rem;">${title}</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:.75rem;">
      ${tokens.map(([name, value, text]) => `
        <div style="background:#fff;border:1px solid var(--border);border-radius:.875rem;overflow:hidden;">
          <div style="height:64px;background:${value};"></div>
          <div style="padding:.6rem .875rem;">
            <div style="font-family:monospace;font-size:.72rem;font-weight:700;color:var(--text);">${name}</div>
            <div style="font-family:monospace;font-size:.68rem;color:var(--text-light);">${value}</div>
            ${text ? `<div style="font-size:.68rem;color:var(--text-muted);margin-top:.15rem;">${text}</div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

export const Paleta = {
  name: '🎨 Paleta Completa',
  render: () => `<div style="max-width:800px;">
    ${swatchGroup('Fundos', [
      ['--bg', '#FDFCF8', 'Fundo principal'],
      ['--bg-alt', '#F5F1E8', 'Fundo alternativo'],
      ['--bg-dark', '#1C1814', 'Seções escuras'],
      ['--bg-dark-alt', '#252018', 'Seções escuras alt'],
    ])}
    ${swatchGroup('Texto', [
      ['--text', '#1C1814', 'Principal'],
      ['--text-2', '#3D3529', 'Secundário'],
      ['--text-muted', '#6B6055', 'Suave'],
      ['--text-light', '#A09080', 'Leve'],
      ['--text-inv', '#F5F1E8', 'Invertido'],
    ])}
    ${swatchGroup('Acento & Semânticas', [
      ['--accent', '#F5D000', 'Amarelo primário — CTA'],
      ['--accent-dark', '#C8AA00', 'Amarelo profundo'],
      ['--green', '#22A06B', 'Sucesso / Garantia'],
      ['--red-soft', '#C94040', 'Negação / Erro'],
      ['--blue', '#2563EB', 'Info'],
    ])}
    ${swatchGroup('Bordas', [
      ['--border', '#E4DDD0', 'Borda clara'],
      ['--border-dark', '#2E2820', 'Borda escura'],
    ])}
  </div>`,
};
