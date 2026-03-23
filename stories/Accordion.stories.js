export default {
  title: 'Componentes/Accordion',
  parameters: { docs: { description: { component: 'Acordeão limpo com bordas horizontais. Ícone + rotaciona em 45° e recebe acento amarelo ao abrir. Comportamento: fecha todos e abre o clicado.' } } },
};

const accordionScript = `
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
`;

export const FAQ = {
  name: '❓ FAQ Style',
  render: () => {
    setTimeout(() => {
      document.querySelectorAll('.faq-q').forEach(q => {
        q.replaceWith(q.cloneNode(true));
      });
      document.querySelectorAll('.faq-q').forEach(q => {
        q.addEventListener('click', () => {
          const item = q.closest('.faq-item');
          const isOpen = item.classList.contains('open');
          document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
          if (!isOpen) item.classList.add('open');
        });
      });
    }, 100);

    return `<div style="max-width:560px;">
      ${[
        ['Preciso saber desenhar para fazer o curso?', 'Não! O Fazdetoon foi criado para iniciantes absolutos. Você aprende do zero com exercícios progressivos.'],
        ['Qual software vou usar?', 'O curso usa Procreate e Adobe Illustrator, mas os conceitos funcionam em qualquer software de desenho digital.'],
        ['Por quanto tempo terei acesso?', 'Acesso vitalício — pague uma vez e acesse para sempre, incluindo todas as atualizações futuras.'],
        ['E se eu não gostar?', 'Você tem 7 dias de garantia incondicional. Basta pedir o reembolso que devolvemos 100% do valor.'],
      ].map(([q, a]) => `
        <div class="faq-item">
          <div class="faq-q">
            ${q}
            <div class="faq-icon">+</div>
          </div>
          <div class="faq-body-wrap">
            <div class="faq-body">${a}</div>
          </div>
        </div>
      `).join('')}
    </div>`;
  },
};
