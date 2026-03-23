export default {
  title: 'Blocos/Login & Auth',
  parameters: { docs: { description: { component: 'Card de autenticação para a área de membros. Login com e-mail/senha e link para recuperação.' } } },
};

export const LoginCard = {
  name: '🔐 Login',
  parameters: { backgrounds: { default: 'alt' } },
  render: () => `<div style="display:flex;justify-content:center;">
    <div class="card-white" style="width:100%;max-width:400px;padding:2.5rem;">
      <div style="text-align:center;margin-bottom:2rem;">
        <div style="font-family:var(--font-brand);font-size:1.75rem;letter-spacing:.05em;margin-bottom:.25rem;">FAZDETOON</div>
        <div style="font-family:var(--font-head);font-size:1.25rem;font-weight:600;">Acesse sua conta</div>
        <div style="font-size:.875rem;color:var(--text-muted);margin-top:.25rem;">Bem-vindo de volta 👋</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <div class="input-wrap">
          <label class="input-label">E-mail</label>
          <input class="input" type="email" placeholder="seu@email.com.br" />
        </div>
        <div class="input-wrap">
          <label class="input-label" style="display:flex;justify-content:space-between;">
            <span>Senha</span>
            <a href="#" style="font-weight:600;font-size:.78rem;color:var(--accent-dark);">Esqueci a senha</a>
          </label>
          <input class="input" type="password" placeholder="••••••••" />
        </div>
        <label style="display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-muted);cursor:pointer;">
          <input type="checkbox" style="accent-color:var(--accent-dark);width:16px;height:16px;" />
          Lembrar de mim
        </label>
        <button class="btn btn-primary btn-lg" style="width:100%;justify-content:center;margin-top:.5rem;">Entrar na plataforma</button>
      </div>
      <div style="text-align:center;margin-top:1.5rem;font-size:.875rem;color:var(--text-muted);">
        Não tem conta? <a href="#" style="font-weight:700;color:var(--text);">Adquira o curso →</a>
      </div>
    </div>
  </div>`,
};
