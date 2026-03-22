# Fazdetoon — Landing Page

> Curso low-ticket de **Criação de Personagens** no estilo Rubber Hose / Cartoon.

## 📁 Estrutura

```
fazdetoon/
├── index.html          # Landing page principal
├── design-system.html  # Documentação do Design System
├── design-system.css   # Tokens CSS (referência)
├── main.js             # Scripts: nav, reveal, counters, countdown, FAQ
├── hero-cat.png        # Personagem rubber hose (hero)
└── teacher-photo.jpg   # Foto do professor (adicionar manualmente)
```

## 🎨 Design System

Acesse `design-system.html` para ver a documentação completa com:
- Tokens de cor, tipografia, espaçamento, sombras
- Todos os componentes: botões, cards, inputs, badges, modais, etc.
- Blocos compostos: dashboard, player de aula, login, perfil

## 🚀 Rodar localmente

```bash
# Python 3 (já vem no macOS)
python3 -m http.server 3000
```

Abrir: `http://localhost:3000/index.html`

## 🌐 Deploy (Vercel)

```bash
npm install -g vercel
vercel --prod
```

## 🛠 Stack

- **HTML / CSS / JS** puro (sem frameworks)
- **Fontes:** Bangers, Fredoka, Nunito (Google Fonts)
- **Animações:** IntersectionObserver, CSS transitions
- **Countdown:** localStorage persistente (24h)

## 📌 Próximos passos

- [ ] Integração com Hotmart (link real no CTA)
- [ ] Foto real do professor em `teacher-photo.jpg`
- [ ] Área de membros (Next.js + Prisma + Auth.js)
- [ ] Storybook com todos os componentes do Design System
