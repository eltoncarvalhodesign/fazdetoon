# Fazdetoon

> Curso low-ticket de **Criação de Personagens** no estilo Rubber Hose / Cartoon.
> Landing page de alta conversão + Design System documentado + Storybook de componentes.

[![Vercel](https://img.shields.io/badge/Vercel-Live-black?logo=vercel)](https://fazdetoon.vercel.app)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Live-222?logo=github)](https://eltoncarvalhodesign.github.io/fazdetoon/)
[![Storybook](https://img.shields.io/badge/Storybook-Components-FF4785?logo=storybook)](https://eltoncarvalhodesign.github.io/fazdetoon/storybook/)

---

## 🌐 Links

| Ambiente | URL |
|---|---|
| **Landing Page (Vercel)** | https://fazdetoon.vercel.app |
| **Landing Page (GitHub Pages)** | https://eltoncarvalhodesign.github.io/fazdetoon/ |
| **Design System** | https://fazdetoon.vercel.app/design-system.html |
| **GitHub** | https://github.com/eltoncarvalhodesign/fazdetoon |

---

## 📁 Estrutura do Projeto

```
fazdetoon/
│
├── 📄 index.html               # Landing page principal (13 seções)
├── 🎨 design-system.html       # Design system navegável (19 componentes)
├── 🎨 design-system.css        # Tokens CSS (variáveis de referência)
├── ⚙️  main.js                  # Scripts: nav, reveal, counters, countdown, FAQ
│
├── 🖼️  hero-cat.png             # Mascote rubber hose (hero section)
├── 📸 teacher-photo.jpg        # Foto do professor (section teacher)
│
├── 📚 stories/                 # Stories do Storybook
│   ├── Cores.stories.js        # Paleta de cores completa
│   ├── Tipografia.stories.js   # Famílias e escala tipográfica
│   ├── Botoes.stories.js       # Variantes, tamanhos, estados
│   ├── Labels.stories.js       # Labels e badges
│   ├── Cards.stories.js        # Card, card-white, card-dark, lesson, stats
│   ├── Inputs.stories.js       # Inputs, password, prefix, textarea
│   ├── Alertas.stories.js      # Success, warning, error, info
│   ├── Accordion.stories.js    # FAQ accordion interativo
│   ├── Avatares.stories.js     # Tamanhos, status, grupo, iniciais
│   ├── Progress.stories.js     # Linear e circular
│   ├── Countdown.stories.js    # Timer com localStorage
│   ├── Skeleton.stories.js     # Loading states shimmer
│   ├── BlocoDashboard.stories.js # Stats row + atividade recente
│   └── BlocoLogin.stories.js   # Card de autenticação
│
├── 🛠️  .storybook/
│   ├── main.js                 # Config do Storybook (html-vite)
│   └── preview.js              # Tokens globais + backgrounds
│
├── 📦 package.json             # Scripts npm
├── 🔒 .gitignore
└── 📖 README.md
```

---

## 🎨 Design System

### Tokens principais

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#FDFCF8` | Fundo principal (creme) |
| `--bg-dark` | `#1C1814` | Seções escuras |
| `--accent` | `#F5D000` | Amarelo — CTAs e destaques |
| `--font-brand` | Bangers | Logo, contador, nome do professor |
| `--font-head` | Fredoka | Todos os headings |
| `--font-body` | Nunito | Texto corrido |

### Componentes disponíveis

| Categoria | Componentes |
|---|---|
| **Ações** | `btn-primary`, `btn-dark`, `btn-ghost`, `btn-danger`, `btn-ghost-inv` |
| **Texto** | `label`, `label-accent`, `label-green`, `label-dark`, `label-danger` |
| **Containers** | `card`, `card-white`, `card-dark` |
| **Formulários** | `input`, estados: focus, error, disabled, password toggle |
| **Feedback** | `alert-success/warning/error/info` |
| **Dados** | `progress-bar`, `progress-fill`, countdown timer |
| **Loading** | `skeleton` (shimmer animation) |
| **Mídia** | `avatar` xs/sm/md/lg/xl, grupos, iniciais |
| **Navegação** | Accordion/FAQ, tabs |

---

## 🚀 Rodar localmente

### Landing Page

```bash
# Python (já vem no macOS)
python3 -m http.server 3000
# Abrir: http://localhost:3000
```

### Storybook

```bash
# Instalar dependências (apenas na primeira vez)
npm install --legacy-peer-deps

# Iniciar Storybook
npm run storybook
# Abrir: http://localhost:6006
```

---

## 🛠 Stack

| Tecnologia | Uso |
|---|---|
| HTML / CSS / JS puro | Landing page e design system (zero dependências) |
| Google Fonts | Bangers + Fredoka + Nunito |
| IntersectionObserver | Scroll reveal animations |
| localStorage | Countdown timer persistente |
| Storybook 10 + html-vite | Documentação de componentes |
| Vercel | Hosting com deploy automático |
| GitHub Pages | Mirror do site |

---

## 📦 Deploy

### Automático (recomendado)

Qualquer `git push` atualiza o Vercel automaticamente em ~30 segundos.

```bash
git add -A
git commit -m "feat: descrição da mudança"
git push
```

### Manual (Vercel)

```bash
npx vercel --prod
```

---

## 🗺 Roadmap

- [x] Landing page completa (13 seções)
- [x] Design system documentado (`design-system.html`)
- [x] Storybook com componentes e blocos
- [x] Deploy Vercel + GitHub Pages
- [ ] Integração Hotmart (link real no CTA)
- [ ] Área de membros (Next.js + Prisma + Auth.js)
- [ ] Autenticação (Auth.js v5 + Google OAuth)
- [ ] Pagamentos (Stripe)
- [ ] Player de aulas

---

## 👤 Autor

**Elton Carvalho** — Ilustrador, Animador & Educador de Criação de Personagens
[fazdetoon.vercel.app](https://fazdetoon.vercel.app)
