# Clément Lopes — Frontend Developer

 — Frontend Developer

I build clean, responsive, and performant web experiences with modern Vue tooling.  
This is the source code for my personal portfolio, deployed from my **homelab** to the world.

 **Portfolio**: [https://clementlopes.site)  
 **GitHub**: [https://github.com/clementlopes/Portfolio)

---

# Clément Lopes — Frontend Developer — Frontend Developer

### Frontend

- **Framework**: [Nuxt 4](https://nuxt.com) (Vue 3, Vite)
- **State Management**: [Pinia](https://pinia.vuejs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com)
- **IDE**: [WebStorm](https://www.jetbrains.com/webstorm/)

### Deployment & Infrastructure

- **Homelab**: Self-managed server running [Proxmox VE](https://www.proxmox.com)
- **Containers**: Docker inside LXC container [Docker LXC](https://community-scripts.github.io/ProxmoxVE/scriptsid=docker)
- **Orchestration**: [Portainer](https://www.portainer.io) for container management
- **Networking**: [Cloudflare Tunnel](https://www.cloudflare.com) for secure, public access (no open ports!)
- **Domain**: `Clémentlopes.site` (Cloudflare DNS)

---

##  Features

-  **Theme toggle** [dark/light theme](https://www.npmjs.com/package/theme-change)
- & accessible
- Nuxt's hybrid rendering (SSG/SSR)
- deployment (Clément + production-ready Docker setup

---

##  Local Development

### Prerequisites

- [Node.js](https://nodejs.org) (LTS recommended)
- [npm](https://www.npmjs.com) (or your preferred package manager)

### Setup

1. **Clémentlopes/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build locally**
   ```bash
   npm run preview
   ```

---

##  Docker

Build and run the app with Docker:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

Or using Docker Compose:

```bash
docker compose up -d
```

---

##  License

This project is open source. Check the repository for details.






















