import type { ProjectCategory, ProjectType } from '#shared/types/ProjectType';

export const projectCategories: ProjectCategory[] = [
  {
    id: 'business-integration',
    order: '01',
    label: 'E-commerce & Business Integration',
    caption: 'Commercial project',
    description:
      'Connecting storefronts to commercial systems: catalog, stock, orders and invoicing.',
  },
  {
    id: 'infrastructure',
    order: '02',
    label: 'Infrastructure & Self-hosting',
    caption: 'Home Lab',
    description:
      'Virtualization, networking, deployment and monitoring on self-owned hardware.',
  },
  {
    id: 'software',
    order: '03',
    label: 'Software Development',
    caption: 'Applications',
    description: 'Application development across front-end and full-stack work.',
  },
];

export const projects: ProjectType[] = [
  {
    id: 'marca-q-marca',
    categoryId: 'business-integration',
    title: "MARCA Q' MARCA",
    subtitle: 'E-commerce platform with invoicing system integration',
    summary:
      'Online store with roughly 21,000 articles, nightly product and stock synchronization, and order data transmitted to the Goldylocks invoicing system. Payments are handled through iThenPay.',
    highlights: [
      'Web development',
      'API integration',
      'Commercial process automation',
      'System-to-system communication',
    ],
    sections: [
      {
        title: 'Catalog integration',
        body:
          'The store serves a catalog of approximately 21,000 articles through WooCommerce. New products are imported and stock levels are refreshed by a scheduled nightly job rather than by manual intervention, so the store reflects supplier and warehouse movements without recurring manual work.',
      },
      {
        title: 'Billing system integration',
        body:
          'When an order is placed, the store transmits structured commercial data to the Goldylocks ERP: customer identity, shipping address, product lines with quantities and unit prices, and the applicable VAT rates. The point is not simply importing products — it is connecting the order process to a system that has to receive commercially consistent information and turn it into an invoice.',
      },
      {
        title: 'After the handover',
        body:
          'Once the order has been handed over, it is marked as completed in the store and management stays centralized in the Goldylocks software. The transmission is one-way: the store sends the order and does not wait for an invoice document to be returned. Invoicing, order states and commercial management remain the responsibility of the ERP, which is already the single source of truth for the operation.',
      },
      {
        title: 'Payments',
        body:
          'Payments are integrated into the checkout through iThenPay, which completes the purchase as a payment-by-reference flow before the order is handed to the invoicing system.',
      },
    ],
    stack: [
      { label: 'WooCommerce', icon: '/img/woocommerce.svg' },
      { label: 'Goldylocks ERP', icon: '/img/goldylocks_logo.png' },
      { label: 'iThenPay', icon: '/img/ifthenpay.svg', onDark: true },
      { label: 'REST API', initials: 'API' },
    ],
    limitations: [
      {
        title: 'Nightly synchronization window',
        detail:
          'Product and stock data refresh once per night, so the store can carry up to roughly 24 hours of drift from the underlying supplier and warehouse reality.',
        mitigation:
          'Event-driven or higher-frequency synchronization for the categories where drift is commercially relevant.',
      },
      {
        title: 'Stock can be oversold inside the window',
        detail:
          'An order accepted near the end of the day may reference an article that is no longer available, because availability was last read hours earlier. Detecting that at order level would require real-time stock validation before the order is accepted.',
      },
      {
        title: 'One-way transmission',
        detail:
          'The store does not receive an invoice confirmation back, so it cannot independently verify that a document was issued. The order is completed on the store side because management is centralized in the ERP. This is a deliberate design decision rather than a defect, but it does mean invoicing state is only observable in the ERP.',
      },
    ],
    links: [{ label: 'marcaqmarca.com', href: 'https://marcaqmarca.com' }],
  },
  {
    id: 'home-lab',
    categoryId: 'infrastructure',
    title: 'Home Lab — Proxmox VE',
    subtitle: 'Self-hosting · Virtualization · Networking · DevOps',
    summary:
      'Self-hosted Proxmox VE infrastructure on a mini PC: LXC and Docker workloads, restricted public exposure through a single controlled ingress, mesh VPN for private access, automated deployment, and availability monitoring with Discord alerts.',
    highlights: [
      'Virtualization & containers',
      'Network segmentation',
      'Automated deployment',
      'Monitoring & alerting',
    ],
    sections: [
      {
        title: 'Virtualization & services',
        body:
          'A mini PC running Proxmox VE hosts the workloads as LXC containers and Docker containers, which keeps resource allocation explicit per service group. Development and deployment run on self-hosted GitLab, with Coolify handling application builds and containerized deployments. Automation and backend services run on PocketBase and n8n. Home automation and multimedia services include Home Assistant, ESPHome, DVR Agent, Immich and iVentoy.',
      },
      {
        title: 'Network architecture',
        body:
          'The residential connection sits behind carrier-grade NAT, so there is no public IP address to forward ports to and dynamic DNS cannot resolve to the network. Instead of working around that constraint with port forwarding, the public ingress is an outbound Cloudflare Tunnel: the tunnel dials out from inside the network and terminates at Cloudflare, which means no inbound port is ever opened on the router. Domains such as this portfolio resolve through Cloudflare, reach the tunnel and terminate at NPMplus, which forwards each hostname to the matching IP:port inside the lab.',
        items: [
          'NPMplus is the single public entry point and reverse proxy. It decides which container answers for a given hostname.',
          'A Cloudflare API token lets NPMplus issue and renew TLS certificates through DNS-01 validation, automatically, without port 80 or 443.',
          'Sites published through Coolify — including this portfolio — are exposed the same way: Cloudflare DNS, the tunnel, NPMplus, then the application IP:port.',
          'Private services such as GitLab, Home Assistant, Immich and AdGuard Home stay on the mesh and are never exposed to the Internet.',
        ],
      },
      {
        title: 'Private access',
        body:
          'Remote access to the private services does not go through the public ingress. The labs use Tailscale as the mesh VPN: its free tier is enough for the current fleet, up to 100 enrolled machines. Headscale and Headplane were evaluated first — a self-hosted coordination server to keep the tailnet independent from a third party — but Headscale is not compatible with the Cloudflare Tunnel, so Tailscale was selected for day-to-day remote access.',
      },
      {
        title: 'Storage & backups',
        body:
          'Two SSDs split the workloads. The first carries the LVM-based storage used by the containers. The second, of 500 GB, holds Immich, DVR Agent, n8n storage and the backup destination. A scheduled Proxmox backup runs daily at 21:00 and covers all containers to the local disk.',
      },
      {
        title: 'Monitoring & alerting',
        body:
          'Uptime Kuma provides availability monitoring for the self-hosted services. Fewer than ten monitors are configured: ICMP pings to the Docker host machines, NPMplus and the databases, plus HTTP requests against the exposed sites to confirm they actually answer. Events are pushed to a Discord channel through webhooks, so outages and recoveries surface as notifications instead of requiring the dashboard to be checked manually.',
        items: [
          'The monitors reach services over the same host or bridge network, which lets private services be monitored without exposing them.',
          'Notifications are outbound webhook calls, so the alerting path adds no new inbound exposure.',
        ],
      },
      {
        title: 'Deployment',
        body:
          'Applications are developed in the self-hosted GitLab instance. Coolify consumes the repository, builds the image and deploys it as a container, which keeps the path from commit to running service inside the same infrastructure.',
      },
    ],
    stack: [
      { label: 'Proxmox VE', icon: '/img/proxmox.svg' },
      { label: 'LXC', icon: '/img/linux-containers-lxc.svg' },
      { label: 'Docker', icon: '/img/docker.svg' },
      { label: 'GitLab', icon: '/img/gitlab.svg' },
      { label: 'Coolify', icon: '/img/coolify.svg' },
      { label: 'PocketBase', icon: '/img/pocketbase.svg' },
      { label: 'n8n', icon: '/img/n8n.svg' },
      { label: 'NPMplus', icon: '/img/npmplus.svg' },
      { label: 'Cloudflare Tunnel', icon: '/img/cloudflare.svg' },
      { label: 'AdGuard Home', icon: '/img/adguardhome.svg' },
      { label: 'Tailscale', icon: '/img/tailscale.svg' },
      { label: 'Home Assistant', icon: '/img/homeassistant.svg' },
      { label: 'Immich', icon: '/img/immich.svg' },
      { label: 'Uptime Kuma', icon: '/img/uptimekuma.svg' },
      { label: 'Discord', icon: '/img/discord.svg' },
    ],
    limitations: [
      {
        title: 'Backups live on the same host',
        detail:
          'The daily backup goes to a local disk on the same mini PC it is protecting. It covers mistakes at the service and data level, but it would not survive the failure of that disk or of the machine itself.',
        mitigation:
          'Copying backups periodically to external storage. The reason it is not in place is the cost of the additional equipment.',
      },
      {
        title: 'The monitor runs on the host it monitors',
        detail:
          'Uptime Kuma is hosted on the same mini PC it watches. If that machine goes down, the monitor cannot report the outage — the failure is silent instead of being alerted.',
        mitigation:
          'Hosting the monitor outside the machine it watches, so a host failure still produces a notification.',
      },
      {
        title: 'Coordination depends on a third-party service',
        detail:
          'Tailscale is the mesh currently in use. It was chosen after evaluating Headscale, which could not work through the Cloudflare Tunnel. The tailnet therefore depends on a third-party coordination service, which is accepted in exchange for compatibility.',
        mitigation:
          'Returning to a self-hosted coordination server if a compatible setup is found, keeping the same Tailscale client protocol.',
      },
      {
        title: 'Limited public exposure is not network security',
        detail:
          'Exposing only a few services reduces the attack surface, but it is a decision rather than a guarantee. Security still depends on firewall rules, open ports, application permissions, TLS and authentication on each service.',
      },
      {
        title: 'Flat internal segmentation',
        detail:
          'The monitored services sit on the same host or bridge network, which is convenient for monitoring but means isolation between them relies on container boundaries rather than on network segmentation between zones.',
        mitigation: 'Firewall rules between the service groups, so a compromised service is not adjacent to the others.',
      },
    ],
    links: [],
  },
  {
    id: 'goldylocks-pos',
    categoryId: 'software',
    title: 'Goldylocks POS',
    subtitle: 'Point of sale front-end — cafés & restaurants',
    summary:
      'Maintained and improved the front-end of a point-of-sale system for public retail, covering cafés and restaurants. New features, operational fixes, API testing in Postman and coordination with the backend team.',
    highlights: [
      'Front-end maintenance',
      'Sales workflow fixes',
      'REST API testing',
      'Backend coordination',
    ],
    sections: [
      {
        title: 'Scope',
        body:
          'Responsible for maintaining and improving the front-end of the POS system: implementing new features, fixing operational issues inside the sales workflow, and handling day-to-day problems that surface in a live retail environment.',
      },
      {
        title: 'API testing',
        body:
          'REST endpoints were exercised and validated in Postman, with issues triaged and coordinated against the backend team.',
      },
      {
        title: 'Relation to the MARCA Q\' MARCA integration',
        body:
          'The POS is the retail-facing surface of the same Goldylocks ERP that receives the order data from the MARCA Q\' MARCA e-commerce integration. Working on both ends of that system means seeing the commercial flow from the invoicing back office through to the point of sale.',
      },
    ],
    stack: [
      { label: 'Vue.js', icon: '/img/vue.svg' },
      { label: 'Vuex', icon: '/img/vuex.svg' },
      { label: 'TailwindCSS', icon: '/img/tailwind.svg' },
      { label: 'Electron', icon: '/img/Electron_Logo.svg' },
    ],
    limitations: [],
    links: [{ label: 'Goldylocks', href: 'https://www.github.com/goldylocks-portugal' }],
  },
  {
    id: 'pgo',
    categoryId: 'software',
    title: 'PGO — Budget Management Platform',
    subtitle: 'Full-stack · replacing hand-written budgets with client-ready documents',
    summary:
      'A budget-management platform developed end to end for a small company that was quoting work on paper. Documents, clients and line items with products or services, line-level values, and a final PDF generated on demand from the stored data.',
    highlights: [
      'Full-stack',
      'Replaces paper budgets',
      'On-demand PDF',
      'Relational data model',
    ],
    sections: [
      {
        title: 'Why it exists',
        body:
          'The company was writing budgets by hand, which made them slow to produce and hard to present: the layout changed from one document to the next and a client had no consistent structure to read. The platform assembles the same budget from stored clients, products and services, so what reaches the client is a properly formatted document with line items and totals instead of a sheet of paper.',
      },
      {
        title: 'What it does',
        body:
          'Documents, clients and line items can be created, edited and deleted. A line item carries a product or a service together with its own value, and the platform generates a final PDF from the assembled document.',
      },
      {
        title: 'Generated on demand, not stored',
        body:
          'Only the data is persisted. The PDF is rendered in the browser from the stored document whenever it is requested, and the generated file is not kept afterwards — storage stays small, but the document has to be produced again to be seen again.',
      },
      {
        title: 'Scope',
        body:
          'Built end to end, covering the relational data model, the persistence layer and the interface. It is an internal tool for a single company: the clients interact with the finished document, not with the platform.',
      },
    ],
    stack: [
      { label: 'MySQL', icon: '/img/MySQL.svg' },
      { label: 'PHP', icon: '/img/php.svg' },
      { label: 'JavaScript', icon: '/img/javascript.svg' },
      { label: 'Bootstrap', icon: '/img/bootstrap.svg' },
      { label: 'jsPDF', initials: 'PDF' },
      { label: 'SQL', icon: '/img/sql.png' },
    ],
    limitations: [
      {
        title: 'No record of the document that was sent',
        detail:
          'Because the PDF is generated on demand and never saved, the database holds the current version of a budget rather than the version that was actually issued. A document edited after being sent produces different values next time it is generated, and there is no way to show what the client originally received.',
        mitigation:
          'Versioning each document and keeping the generated file for the revisions that were really sent, accepting the storage cost that the current approach avoids.',
      },
      {
        title: 'Stack is dated and unmaintained',
        detail:
          'The platform runs on PHP with Bootstrap and a client-side PDF library, a combination I would not start a project with today. It is published as a reference for how the problem was solved, not as a system to deploy or extend, and none of its dependencies are being maintained.',
        mitigation:
          'Rewriting it on Nuxt and TypeScript with server-side PDF generation, reusing the same relational model.',
      },
      {
        title: 'No authentication or roles',
        detail:
          'There is no login and no separation of roles, so anyone who reaches the application can create, edit and delete documents and clients. There is also no audit trail showing who changed a value or when.',
        mitigation:
          'Adding users and roles, and recording the author and the revision history of each document.',
      },
      {
        title: 'A budget does not become an order',
        detail:
          'The document leaves the system as a PDF and nothing links it to invoicing or to an order, so an accepted quote still has to be re-entered elsewhere. That gap is the same one the MARCA Q\' MARCA integration closes from the other direction, by sending an order to the ERP instead of producing a document.',
        mitigation:
          'Marking an accepted budget as won and pushing its line items into the ERP as an order.',
      },
    ],
    links: [
      {
        label: 'github.com/clementlopes',
        href: 'https://github.com/clementlopes/Plataforma-gestao-de-orcamentos',
      },
    ],
  },
];

export const getProjectsByCategory = (categoryId: string): ProjectType[] =>
  projects.filter((project) => project.categoryId === categoryId);