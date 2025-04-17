# Tecsomobi Charging Points – Front‑end (MUI)

**React + Vite • MUI v5 • TailwindCSS v4 • Framer Motion • Google Maps**

[🔗 Preview](https://mui-react-tecsomobi.vercel.app/) •

---

# O crud pedido no desafio está na rota [🔗 CRUD](https://mui-react-tecsomobi.vercel.app/admin)
### email: admin@gmail.com
### senha: 1234

## obs: como a api esta hospedada no render free o carregamento do login demora um pouco.

---

## 📌 Visão Geral
Esta SPA exibe pontos de recarga de cartão urbano em um **mapa interativo** e oferece uma área administrativa (`/admin`) onde o usuário _admin_ pode realizar o **CRUD completo** desses pontos.

- **Landing page**: seção explicativa com CTA e animações Framer
- **/pontos-de-recarga**: mapa interativo + sidebar de lista de pontos
- **/admin**: área protegida (JWT) com grid de dados, formulários e dialogs MUI

---

## 🛠️ Dependências Principais
| Pacote                               | Uso                                   |
|--------------------------------------|---------------------------------------|
| `@mui/material` + `@emotion/react`   | Componentes UI acessíveis             |
| `@react-google-maps/api`             | Mapa interativo e markers             |
| `tailwindcss` + `@tailwindcss/vite`  | Utility-first CSS                     |
| `react-router-dom`                   | Navegação e rotas React               |
| `framer-motion`                      | Animações fluidas                     |
| `react-icons`                        | Ícones variados                       |
| `react-scroll`                       | Scroll suave em seções                |
| `date-fns`                           | Manipulação de datas                  |
| `@fontsource/work-sans` et al.      | Fontes: Work Sans, Poppins, Quicksand |

> Outras libs descritas em `package.json` seguem na raiz do projeto.

---

## 📁 Estrutura de Pastas
```bash
src/
├── assets/             # Imagens, logos e ícones
├── components/         # Header, Footer, MapView, LoadingButton...
├── hooks/              # useChargingPoints, useAuth, etc.
├── pages/
│   ├── Home.tsx        # Landing page
│   ├── MapPage.tsx     # /pontos-de-recarga
│   ├── Admin/          # Layout, Login, Dashboard, PointDialog
│   └── NotFound.tsx    # Página 404
├── router/
│   └── index.tsx       # Definição de rotas com lazy-loading
├── services/
│   └── api.ts          # Instância Axios + interceptors
├── styles/
│   └── tailwind.css    # Importações base, components e utilities
└── main.tsx            # Entrypoint React + Vite
```

---

## ⚙️ Pré‑requisitos
- **Node.js** ≥ 18
- **npm** ≥ 9 (ou pnpm / yarn)

---

## 🚀 Instalação
```bash
git clone https://github.com/seu-usuario/tecsomobi-frontend-mui.git
cd tecsomobi-frontend-mui
npm install
```

### 🔧 Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz:
```env
VITE_API_URL=http://localhost:3333      # URL da API Node/Prisma
VITE_GOOGLE_MAPS_KEY=YOUR_KEY_HERE      # Chave da API Google Maps
```

---

## 🎛️ Scripts Úteis
| Comando             | Descrição                         |
|---------------------|-----------------------------------|
| `npm run dev`       | Vite + hot-reload                 |
| `npm run build`     | Gera `dist/` para produção        |
| `npm run preview`   | Servidor local do build estático  |

---

## 🔒 Autenticação
- **Admin único:** `admin@gmail.com` / `1234`
- Após login, o JWT é salvo em `localStorage` e enviado automaticamente via header Axios:
  ```http
  Authorization: Bearer <jwt>
  ```

---

## 🗺️ Rotas Principais
| Rota                         | Descrição                                      |
|------------------------------|------------------------------------------------|
| `/`                          | Landing page com scroll parallax e animações   |
| `/pontos-de-recarga`         | Mapa interativo + sidebar de pontos            |
| `/admin`                     | Formulário MUI (email / senha)                 |
| `/admin`                     | Dashboard MUI (DataGrid, dialogs de CRUD)      |

### Área `/admin` (CRUD)
| Ação             | Componentes MUI                                |
|------------------|-----------------------------------------------|
| Listagem         | `DataGrid` com paginação                      |
| Adicionar/Editar | `Dialog`, `TextField`, `Select`, `DatePicker`|
| Deletar          | `Dialog`, `DialogActions`, `Button`          |
| Validação        | `Yup` + `React Hook Form`                     |

---

## 🎨 TailwindCSS + MUI
- `tailwind.css` importa `@tailwind base`, `@tailwind components` e `@tailwind utilities`.
- É possível combinar `className` (Tailwind) e `sx` (MUI) nos mesmos elementos.

---

## 📍 Integração Google Maps
- Componente `MapView.tsx` usa `<GoogleMap>` e `<MarkerF>`.
- Zoom inicial em 14, markers customizados de acordo com `status`.
- Clique no marker abre `InfoWindow` com detalhes.

---

## 🔧 Padrões & Boas Práticas
- **Hooks** específicos para lógica (`useAuth`, `useChargingPoints`).
- **Camada de serviços** isolando chamadas HTTP.
- **Rotas lazy-loaded** + `Suspense` para otimizar bundle.
- **Imports absolutos** (`@/...`) via `tsconfig.paths`.
- **Lint & Formatting**: ESLint + Prettier configurados.

---

## ☁️ Deploy
1. `npm run build` → gera pasta `dist/`.
2. Hospede em Vercel, Netlify, S3 ou Cloudflare Pages.
3. Configure rewrites: `/* → /index.html`.
4. Defina variáveis de produção (API + Maps Key).

---

## 🔄 Customização
- Edite cores em `tailwind.config.js` (`theme.extend.colors`).
- Importe novas fontes via `@fontsource`.
- Ajuste texto de preview no topo deste README.

---

## 🎉 Conclusão

Front‑end em MUI, React e TailwindCSS desenvolvido especialmente para o desafio Tecsomobi Charging Points.

## 📜 Licença
MIT © 2025 Tecsomobi

