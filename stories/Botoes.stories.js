export default {
  title: 'Componentes/Botões',
  parameters: { docs: { description: { component: 'Sistema de botões do Fazdetoon. Use `.btn` como base e combine com variantes de estilo e tamanho.' } } },
};

export const Primary = {
  name: '🟡 Primary',
  render: () => `<div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center;">
    <button class="btn btn-primary btn-sm">Pequeno</button>
    <button class="btn btn-primary">Padrão</button>
    <button class="btn btn-primary btn-lg">Grande</button>
    <button class="btn btn-primary btn-xl">Extra Grande</button>
  </div>`,
};

export const AllVariants = {
  name: '🎨 Todas as Variantes',
  render: () => `<div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center;">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-dark">Dark</button>
    <button class="btn btn-ghost">Ghost</button>
    <button class="btn btn-danger">Danger</button>
  </div>`,
};

export const OnDark = {
  name: '🌑 Sobre fundo escuro',
  parameters: { backgrounds: { default: 'dark' } },
  render: () => `<div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center;">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-ghost-inv">Ghost Inv</button>
  </div>`,
};

export const States = {
  name: '🔄 Estados',
  render: () => `<div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center;">
    <button class="btn btn-primary">Normal</button>
    <button class="btn btn-primary" disabled>Desabilitado</button>
    <button class="btn btn-primary" style="opacity:.7;cursor:wait;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation:spin 1s linear infinite">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
      Carregando...
    </button>
  </div>
  <style>@keyframes spin { to { transform: rotate(360deg); } }</style>`,
};

export const WithIcon = {
  name: '✨ Com Ícone',
  render: () => `<div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center;">
    <button class="btn btn-primary">Começar agora →</button>
    <button class="btn btn-dark">
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm1 11H9v-2h2v2zm0-4H9V7h2v2z"/></svg>
      Saiba mais
    </button>
    <button class="btn btn-ghost">↓ Ver conteúdo</button>
  </div>`,
};
