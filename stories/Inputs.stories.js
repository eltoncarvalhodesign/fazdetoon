export default {
  title: 'Componentes/Inputs',
  parameters: { docs: { description: { component: 'Campos de formulário — usados na área de membros, login e checkout.' } } },
};

export const Default = {
  name: '📝 Padrão',
  render: () => `<div style="max-width:360px;display:flex;flex-direction:column;gap:1rem;">
    <div class="input-wrap">
      <label class="input-label">Nome completo</label>
      <input class="input" type="text" placeholder="Elton Carvalho" />
    </div>
    <div class="input-wrap">
      <label class="input-label">E-mail</label>
      <input class="input" type="email" placeholder="elton@fazdetoon.com.br" />
    </div>
  </div>`,
};

export const States = {
  name: '🔄 Todos os estados',
  render: () => `<div style="max-width:360px;display:flex;flex-direction:column;gap:1.25rem;">
    <div class="input-wrap">
      <label class="input-label">Padrão</label>
      <input class="input" type="text" placeholder="Digite aqui..." />
    </div>
    <div class="input-wrap">
      <label class="input-label">Preenchido</label>
      <input class="input" type="text" value="Elton Carvalho" />
    </div>
    <div class="input-wrap">
      <label class="input-label">Desabilitado</label>
      <input class="input" type="text" placeholder="Desabilitado" disabled />
    </div>
    <div class="input-wrap">
      <label class="input-label">Erro</label>
      <input class="input error" type="email" value="email-invalido" />
      <span class="input-error">⚠ Informe um e-mail válido</span>
    </div>
    <div class="input-wrap">
      <label class="input-label">Com dica</label>
      <input class="input" type="text" placeholder="fazdetoon" />
      <span class="input-hint">Apenas letras, números e hífens</span>
    </div>
  </div>`,
};

export const Password = {
  name: '🔒 Senha com toggle',
  render: () => {
    const id = 'pw-' + Math.random().toString(36).slice(2);
    return `<div style="max-width:360px;">
      <div class="input-wrap">
        <label class="input-label">Senha</label>
        <div style="position:relative;">
          <input class="input" id="${id}" type="password" placeholder="••••••••" style="padding-right:3rem;" />
          <button onclick="var i=document.getElementById('${id}');i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'👁':'🙈'"
            style="position:absolute;right:.75rem;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:1rem;padding:.25rem;">👁</button>
        </div>
      </div>
    </div>`;
  },
};

export const WithPrefix = {
  name: '💰 Com prefixo / sufixo',
  render: () => `<div style="max-width:360px;display:flex;flex-direction:column;gap:1rem;">
    <div class="input-wrap">
      <label class="input-label">Valor</label>
      <div style="position:relative;">
        <span style="position:absolute;left:1rem;top:50%;transform:translateY(-50%);font-weight:700;color:var(--text-muted);">R$</span>
        <input class="input" type="number" placeholder="97,00" style="padding-left:2.5rem;" />
      </div>
    </div>
    <div class="input-wrap">
      <label class="input-label">Busca</label>
      <div style="position:relative;">
        <span style="position:absolute;left:1rem;top:50%;transform:translateY(-50%);color:var(--text-light);">🔍</span>
        <input class="input" type="search" placeholder="Buscar aula..." style="padding-left:2.75rem;" />
      </div>
    </div>
  </div>`,
};

export const Textarea = {
  name: '📄 Textarea',
  render: () => `<div style="max-width:360px;" class="input-wrap">
    <label class="input-label">Mensagem</label>
    <textarea class="input" rows="4" placeholder="Escreva sua dúvida..." style="resize:vertical;"></textarea>
  </div>`,
};
