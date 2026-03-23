export default {
  title: 'Componentes/Alertas',
  parameters: { docs: { description: { component: 'Alertas contextuais para feedback de ações. Variantes: success, warning, error, info.' } } },
};

const icons = { success: '✅', warning: '⚠️', error: '❌', info: 'ℹ️' };

export const AllAlerts = {
  name: '🔔 Todas as Variantes',
  render: () => `<div style="display:flex;flex-direction:column;gap:.875rem;max-width:500px;">
    <div class="alert alert-success">
      <span>${icons.success}</span>
      <div><div class="alert-title">Compra realizada!</div>
      <div class="alert-body">Seu acesso ao Fazdetoon foi liberado. Verifique seu e-mail.</div></div>
    </div>
    <div class="alert alert-warning">
      <span>${icons.warning}</span>
      <div><div class="alert-title">Oferta expira em breve</div>
      <div class="alert-body">Você tem menos de 2 horas para garantir o preço de lançamento.</div></div>
    </div>
    <div class="alert alert-error">
      <span>${icons.error}</span>
      <div><div class="alert-title">Erro no pagamento</div>
      <div class="alert-body">Verifique os dados do cartão e tente novamente.</div></div>
    </div>
    <div class="alert alert-info">
      <span>${icons.info}</span>
      <div><div class="alert-title">Atualização disponível</div>
      <div class="alert-body">Uma nova versão do curso foi publicada com conteúdo extra.</div></div>
    </div>
  </div>`,
};
