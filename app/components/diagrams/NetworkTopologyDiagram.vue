<template>
  <figure class="w-full">
    <svg
      viewBox="0 0 880 960"
      class="w-full h-auto"
      role="img"
      aria-labelledby="topology-title topology-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="topology-title">
        Home Lab network topology — restricted public exposure and private mesh access
      </title>
      <desc id="topology-desc">
        The residential connection is behind carrier-grade NAT, so there is no public IP and no port
        forwarding. Public access uses an outbound Cloudflare Tunnel, the single public ingress, which
        routes through NPMplus to the PocketBase API and n8n. Private services are reached over a
        Tailscale mesh with a self-hosted Headscale coordination server. Everything runs on a mini PC
        running Proxmox VE with LXC and Docker containers across two SSDs, with a scheduled nightly
        Proxmox backup. Uptime Kuma monitors services over the local host or bridge network and pushes
        alerts to Discord through outbound webhooks.
      </desc>

      <defs>
        <marker
          id="nt-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" class="fill-base-content/45" />
        </marker>
        <marker
          id="nt-arrow-public"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" class="fill-primary" />
        </marker>
        <marker
          id="nt-arrow-private"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" class="fill-secondary" />
        </marker>
      </defs>

      <!-- ============ column headers ============ -->
      <rect x="20" y="20" width="410" height="52" rx="10" class="fill-base-200 stroke-base-300" stroke-width="2" />
      <text x="225" y="52" text-anchor="middle" class="fill-base-content font-semibold text-[14px]">
        Internet
      </text>

      <rect x="450" y="20" width="410" height="52" rx="10" class="fill-base-200 stroke-base-300" stroke-width="2" />
      <text x="655" y="46" text-anchor="middle" class="fill-base-content font-semibold text-[14px]">
        Authorized devices
      </text>
      <text x="655" y="63" text-anchor="middle" class="fill-base-content/55 text-[11.5px]">
        local network or Tailscale mesh
      </text>

      <!-- ============ CGNAT band ============ -->
      <rect
        x="20"
        y="88"
        width="840"
        height="50"
        rx="10"
        class="fill-warning/10 stroke-warning/40"
        stroke-width="2"
        stroke-dasharray="6 4"
      />
      <text x="440" y="110" text-anchor="middle" class="fill-base-content font-semibold text-[13px]">
        Residential connection behind carrier-grade NAT
      </text>
      <text x="440" y="128" text-anchor="middle" class="fill-base-content/60 text-[11.5px]">
        no public IP · no port forwarding possible · dynamic DNS cannot resolve to the network
      </text>

      <!-- ============ left column: public ============ -->
      <text x="20" y="172" class="fill-primary font-semibold text-[13px]">Public exposure</text>
      <text x="150" y="172" class="fill-base-content/50 text-[12px]">one controlled ingress</text>

      <rect x="20" y="186" width="410" height="66" rx="12" class="fill-primary/10 stroke-primary/45" stroke-width="2" />
      <text x="225" y="216" text-anchor="middle" class="fill-base-content font-semibold text-[14.5px]">
        Cloudflare Tunnel
      </text>
      <text x="225" y="237" text-anchor="middle" class="fill-base-content/65 text-[12px]">
        outbound connection — no inbound port opened
      </text>

      <line x1="225" y1="252" x2="225" y2="278" class="stroke-primary" stroke-width="2.5" marker-end="url(#nt-arrow-public)" />

      <rect x="20" y="282" width="410" height="66" rx="12" class="fill-base-100 stroke-base-300" stroke-width="2" />
      <text x="225" y="312" text-anchor="middle" class="fill-base-content font-semibold text-[14.5px]">
        NPMplus
      </text>
      <text x="225" y="333" text-anchor="middle" class="fill-base-content/65 text-[12px]">
        reverse proxy · single public entry point
      </text>

      <path d="M 150 348 L 150 366" class="stroke-primary/70" stroke-width="2" marker-end="url(#nt-arrow-public)" />
      <path d="M 310 348 L 310 366" class="stroke-primary/70" stroke-width="2" marker-end="url(#nt-arrow-public)" />

      <rect x="20" y="370" width="195" height="72" rx="11" class="fill-base-100 stroke-primary/40" stroke-width="2" />
      <text x="117" y="400" text-anchor="middle" class="fill-base-content font-semibold text-[13.5px]">
        PocketBase API
      </text>
      <text x="117" y="420" text-anchor="middle" class="fill-primary text-[11.5px]">public</text>

      <rect x="235" y="370" width="195" height="72" rx="11" class="fill-base-100 stroke-primary/40" stroke-width="2" />
      <text x="332" y="400" text-anchor="middle" class="fill-base-content font-semibold text-[13.5px]">
        n8n
      </text>
      <text x="332" y="420" text-anchor="middle" class="fill-primary text-[11.5px]">external access</text>

      <!-- ============ right column: private ============ -->
      <text x="450" y="172" class="fill-secondary font-semibold text-[13px]">Private access</text>
      <text x="560" y="172" class="fill-base-content/50 text-[12px]">mesh VPN</text>

      <rect x="450" y="186" width="410" height="66" rx="12" class="fill-secondary/10 stroke-secondary/45" stroke-width="2" />
      <text x="655" y="216" text-anchor="middle" class="fill-base-content font-semibold text-[14.5px]">
        Headscale
      </text>
      <text x="655" y="237" text-anchor="middle" class="fill-base-content/65 text-[12px]">
        self-hosted coordination server
      </text>

      <line x1="655" y1="252" x2="655" y2="278" class="stroke-secondary" stroke-width="2.5" marker-end="url(#nt-arrow-private)" />

      <rect x="450" y="282" width="410" height="66" rx="12" class="fill-base-100 stroke-base-300" stroke-width="2" />
      <text x="655" y="312" text-anchor="middle" class="fill-base-content font-semibold text-[14.5px]">
        Tailscale mesh
      </text>
      <text x="655" y="333" text-anchor="middle" class="fill-base-content/65 text-[12px]">
        enrolled machines · Headplane admin
      </text>

      <path d="M 513 348 L 513 366" class="stroke-secondary/70" stroke-width="2" marker-end="url(#nt-arrow-private)" />
      <path d="M 655 348 L 655 366" class="stroke-secondary/70" stroke-width="2" marker-end="url(#nt-arrow-private)" />
      <path d="M 797 348 L 797 366" class="stroke-secondary/70" stroke-width="2" marker-end="url(#nt-arrow-private)" />

      <!-- private service grid -->
      <g class="fill-base-100 stroke-secondary/35" stroke-width="2">
        <rect x="450" y="370" width="127" height="58" rx="10" />
        <rect x="592" y="370" width="127" height="58" rx="10" />
        <rect x="734" y="370" width="126" height="58" rx="10" />
        <rect x="450" y="443" width="127" height="58" rx="10" />
        <rect x="592" y="443" width="127" height="58" rx="10" />
        <rect x="734" y="443" width="126" height="58" rx="10" />
      </g>
      <g text-anchor="middle" class="fill-base-content/80 text-[12.5px]">
        <text x="513" y="404">GitLab</text>
        <text x="655" y="404">Coolify</text>
        <text x="797" y="404">Home Assistant</text>
        <text x="513" y="477">Immich</text>
        <text x="655" y="477">AdGuard Home</text>
        <text x="797" y="477">Uptime Kuma</text>
      </g>

      <!-- ============ local network band ============ -->
      <rect x="20" y="536" width="840" height="78" rx="12" class="fill-base-200 stroke-base-300" stroke-width="2" />
      <text x="440" y="562" text-anchor="middle" class="fill-base-content font-semibold text-[13.5px]">
        Local network / host · bridge
      </text>
      <text x="440" y="583" text-anchor="middle" class="fill-base-content/65 text-[12px]">
        databases and remaining services — reachable here, not from the Internet
      </text>
      <text x="440" y="602" text-anchor="middle" class="fill-base-content/45 text-[11.5px]">
        monitored over this segment, which is why private services can be watched without exposing them
      </text>

      <!-- ============ mini PC base ============ -->
      <rect x="20" y="644" width="840" height="186" rx="14" class="fill-base-100 stroke-primary/35" stroke-width="2.5" />
      <text x="42" y="676" class="fill-base-content font-semibold text-[15px]">Mini PC · Proxmox VE</text>
      <text x="42" y="697" class="fill-base-content/60 text-[12.5px]">
        LXC containers · Docker containers · resource allocation per service group
      </text>

      <rect x="42" y="712" width="396" height="90" rx="11" class="fill-base-200 stroke-base-300" stroke-width="2" />
      <text x="240" y="742" text-anchor="middle" class="fill-base-content font-semibold text-[13px]">SSD 1</text>
      <text x="240" y="763" text-anchor="middle" class="fill-base-content/65 text-[12px]">LVM storage</text>
      <text x="240" y="784" text-anchor="middle" class="fill-base-content/65 text-[12px]">containers</text>

      <rect x="454" y="712" width="384" height="90" rx="11" class="fill-base-200 stroke-base-300" stroke-width="2" />
      <text x="646" y="742" text-anchor="middle" class="fill-base-content font-semibold text-[13px]">SSD 2 · 500 GB</text>
      <text x="646" y="763" text-anchor="middle" class="fill-base-content/65 text-[12px]">Immich · DVR Agent · n8n storage</text>
      <text x="646" y="784" text-anchor="middle" class="fill-base-content/65 text-[12px]">backup destination</text>

      <text x="440" y="822" text-anchor="middle" class="fill-base-content/60 text-[12px]">
        21:00 — scheduled Proxmox backup, all containers, to the local disk
      </text>

      <!-- ============ alerting ============ -->
      <line x1="440" y1="830" x2="440" y2="852" class="stroke-base-content/45" stroke-width="2" marker-end="url(#nt-arrow)" />

      <rect x="20" y="856" width="840" height="76" rx="12" class="fill-base-100 stroke-base-300" stroke-width="2" />
      <text x="440" y="886" text-anchor="middle" class="fill-base-content font-semibold text-[13.5px]">
        Uptime Kuma → webhook → Discord
      </text>
      <text x="440" y="907" text-anchor="middle" class="fill-base-content/65 text-[12px]">
        ICMP pings to hosts, NPMplus and databases · HTTP checks against exposed sites
      </text>
      <text x="440" y="924" text-anchor="middle" class="fill-base-content/45 text-[11.5px]">
        outbound only — the alerting path adds no inbound exposure
      </text>
    </svg>

    <figcaption class="mt-3 text-xs text-base-content/55 text-center">
      Conceptual diagram — actual forwarding depends on the network rules and the configuration of
      each service.
    </figcaption>
  </figure>
</template>