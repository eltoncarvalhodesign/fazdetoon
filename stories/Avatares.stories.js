export default {
  title: 'Componentes/Avatares',
  parameters: { docs: { description: { component: 'Avatares em 5 tamanhos, com indicador de status, sobreposição em grupo e fallback de iniciais.' } } },
};

const photo = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=160&h=160';

export const Sizes = {
  name: '📏 Tamanhos',
  render: () => `<div style="display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;">
    ${[['xs','24'],['sm','32'],['md','40'],['lg','56'],['xl','80']].map(([s,px]) =>
      `<div style="text-align:center;">
        <img class="avatar avatar-${s}" src="${photo}" alt="Avatar" />
        <div style="font-size:.65rem;color:var(--text-light);margin-top:.4rem;font-family:monospace;">.avatar-${s}<br>${px}px</div>
      </div>`
    ).join('')}
  </div>`,
};

export const WithStatus = {
  name: '🟢 Com Status',
  render: () => `<div style="display:flex;gap:1.5rem;align-items:flex-end;">
    ${[
      ['Online', '#22A06B'],
      ['Ocupado', '#C94040'],
      ['Ausente', '#A09080'],
    ].map(([label, color]) =>
      `<div style="text-align:center;">
        <div style="position:relative;display:inline-block;">
          <img class="avatar avatar-lg" src="${photo}" alt="Avatar" />
          <span style="position:absolute;bottom:1px;right:1px;width:12px;height:12px;background:${color};border-radius:50%;border:2px solid white;"></span>
        </div>
        <div style="font-size:.72rem;color:var(--text-light);margin-top:.4rem;">${label}</div>
      </div>`
    ).join('')}
  </div>`,
};

export const Group = {
  name: '👥 Grupo',
  render: () => `<div style="display:flex;align-items:center;gap:.5rem;">
    <div style="display:flex;">
      ${['photo-1494790108377-be9c29b29330','photo-1472099645785-5658abf4ff4e','photo-1438761681033-6461ffad8d80','photo-1507003211169-0a1dd7228f2d'].map((id, i) =>
        `<img class="avatar avatar-md" src="https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=80&h=80"
          style="border:2px solid white;margin-left:${i>0?'-10px':'0'};" alt="Aluno ${i+1}" />`
      ).join('')}
      <div class="avatar avatar-md avatar-initials" style="width:40px;height:40px;font-size:.78rem;border:2px solid white;margin-left:-10px;">+40</div>
    </div>
    <span style="font-size:.875rem;color:var(--text-muted);font-weight:600;">2.400+ alunos</span>
  </div>`,
};

export const Initials = {
  name: '🔤 Iniciais (sem foto)',
  render: () => `<div style="display:flex;gap:1rem;align-items:center;">
    ${[['EC','40'],['LM','56'],['AS','80']].map(([init,size]) =>
      `<div class="avatar-initials" style="width:${size}px;height:${size}px;font-size:${parseInt(size)*.35}px;">${init}</div>`
    ).join('')}
  </div>`,
};
