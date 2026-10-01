<template>
  <figure class="w-full">
    <svg
      viewBox="0 0 880 1110"
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
        forwarding. Public access uses an outbound Cloudflare Tunnel: domains resolve through
        Cloudflare, reach the tunnel and terminate at NPMplus, which forwards each hostname to the
        matching IP:port inside the lab. NPMplus issues its TLS certificates automatically through a
        Cloudflare API token using DNS-01 validation. Public applications include the PocketBase
        API, n8n and sites deployed through Coolify, such as this portfolio. Private services are
        reached over a Tailscale mesh. Everything runs on a mini PC running Proxmox VE with LXC and
        Docker containers across two SSDs, with a scheduled nightly Proxmox backup. Uptime Kuma
        monitors services over the local host or bridge network and pushes alerts to Discord through
        outbound webhooks.
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

      <!-- ============ public column ============ -->
      <text x="20" y="172" class="fill-primary font-semibold text-[13px]">Public exposure</text>
      <text x="160" y="172" class="fill-base-content/50 text-[12px]">one controlled ingress</text>

      <rect x="20" y="186" width="410" height="66" rx="12" class="fill-primary/10 stroke-primary/45" stroke-width="2" />
      <text x="225" y="212" text-anchor="middle" class="fill-base-content font-semibold text-[14.5px]">
        Cloudflare (DNS + Tunnel)
      </text>
      <text x="225" y="234" text-anchor="middle" class="fill-base-content/65 text-[11.5px]">
        domains resolve here · tunnel dials out
      </text>

      <line x1="225" y1="252" x2="225" y2="278" class="stroke-primary" stroke-width="2.5" marker-end="url(#nt-arrow-public)" />

      <rect x="20" y="282" width="410" height="66" rx="12" class="fill-base-100 stroke-base-300" stroke-width="2" />
      <text x="225" y="308" text-anchor="middle" class="fill-base-content font-semibold text-[14.5px]">
        NPMplus
      </text>
      <text x="225" y="330" text-anchor="middle" class="fill-base-content/65 text-[11.5px]">
        reverse proxy · forwards by hostname
      </text>

      <rect x="20" y="366" width="410" height="52" rx="10" class="fill-lime-100/40 stroke-lime-600/40" stroke-width="1.5" />
      <text x="225" y="388" text-anchor="middle" class="fill-base-content/70 text-[11.5px]">
        TLS certificates issued automatically
      </text>
      <text x="225" y="406" text-anchor="middle" class="fill-base-content/50 text-[11px]">
        DNS-01 validation via Cloudflare API token · no port 80/443
      </text>

      <path d="M 60 418 L 60 448" class="stroke-primary/70" stroke-width="2" marker-end="url(#nt-arrow-public)" />
      <path d="M 225 418 L 225 448" class="stroke-primary/70" stroke-width="2" marker-end="url(#nt-arrow-public)" />
      <path d="M 390 418 L 390 448" class="stroke-primary/70" stroke-width="2" marker-end="url(#nt-arrow-public)" />

      <rect x="20" y="452" width="195" height="64" rx="11" class="fill-base-100 stroke-primary/40" stroke-width="2" />
      <text x="117" y="480" text-anchor="middle" class="fill-base-content font-semibold text-[13px]">
        PocketBase API
      </text>
      <text x="117" y="500" text-anchor="middle" class="fill-primary text-[11px]">public</text>

      <rect x="235" y="452" width="195" height="64" rx="11" class="fill-base-100 stroke-primary/40" stroke-width="2" />
      <text x="332" y="480" text-anchor="middle" class="fill-base-content font-semibold text-[13px]">
        n8n
      </text>
      <text x="332" y="500" text-anchor="middle" class="fill-primary text-[11px]">external access</text>

      <path d="M 117 516 L 117 530" class="stroke-base-content/35" stroke-width="1.5" stroke-dasharray="4 3" />
      <path d="M 332 516 L 332 530" class="stroke-base-content/35" stroke-width="1.5" stroke-dasharray="4 3" />

      <rect x="20" y="534" width="410" height="64" rx="11" class="fill-base-100 stroke-primary/40" stroke-width="2" stroke-dasharray="5 4" />
      <text x="225" y="562" text-anchor="middle" class="fill-base-content font-semibold text-[13px]">
        Sites deployed via Coolify
      </text>
      <text x="225" y="582" text-anchor="middle" class="fill-base-content/65 text-[11.5px]">
        NPMplus → matching IP:port — such as this portfolio
      </text>

      <!-- ============ private column ============ -->
      <text x="450" y="172" class="fill-secondary font-semibold text-[13px]">Private access</text>
      <text x="570" y="172" class="fill-base-content/50 text-[12px]">mesh VPN</text>

      <rect x="450" y="186" width="410" height="66" rx="12" class="fill-secondary/10 stroke-secondary/45" stroke-width="2" />
      <text x="655" y="212" text-anchor="middle" class="fill-base-content font-semibold text-[14.5px]">
        Tailscale
      </text>
      <text x="655" y="234" text-anchor="middle" class="fill-base-content/65 text-[11.5px]">
        mesh VPN · free tier, up to 100 machines
      </text>

      <line x1="655" y1="252" x2="655" y2="278" class="stroke-secondary" stroke-width="2.5" marker-end="url(#nt-arrow-private)" />

      <rect x="450" y="282" width="410" height="66" rx="12" class="fill-base-100 stroke-base-300" stroke-width="2" />
      <text x="655" y="308" text-anchor="middle" class="fill-base-content font-semibold text-[14.5px]">
        Tailscale mesh
      </text>
      <text x="655" y="330" text-anchor="middle" class="fill-base-content/65 text-[11.5px]">
        enrolled machines over the local network or the mesh
      </text>

      <path d="M 513 348 L 513 366" class="stroke-secondary/70" stroke-width="2" marker-end="url(#nt-arrow-private)" />
      <path d="M 655 348 L 655 366" class="stroke-secondary/70" stroke-width="2" marker-end="url(#nt-arrow-private)" />
      <path d="M 797 348 L 797 366" class="stroke-secondary/70" stroke-width="2" marker-end="url(#nt-arrow-private)" />

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
      <rect x="20" y="636" width="840" height="78" rx="12" class="fill-base-200 stroke-base-300" stroke-width="2" />
      <text x="440" y="662" text-anchor="middle" class="fill-base-content font-semibold text-[13.5px]">
        Local network / host · bridge
      </text>
      <text x="440" y="683" text-anchor="middle" class="fill-base-content/65 text-[12px]">
        databases and remaining services — reachable here, not from the Internet
      </text>
      <text x="440" y="702" text-anchor="middle" class="fill-base-content/45 text-[11.5px]">
        monitored over this segment, which is why private services can be watched without exposing them
      </text>

      <!-- ============ mini PC base ============ -->
      <rect x="20" y="744" width="840" height="196" rx="14" class="fill-base-100 stroke-primary/35" stroke-width="2.5" />
      <text x="42" y="776" class="fill-base-content font-semibold text-[15px]">Mini PC · Proxmox VE</text>
      <text x="42" y="797" class="fill-base-content/60 text-[12.5px]">
        LXC containers · Docker containers · resource allocation per service group
      </text>

      <rect x="42" y="812" width="396" height="90" rx="11" class="fill-base-200 stroke-base-300" stroke-width="2" />
      <text x="240" y="842" text-anchor="middle" class="fill-base-content font-semibold text-[13px]">SSD 1</text>
      <text x="240" y="863" text-anchor="middle" class="fill-base-content/65 text-[12px]">LVM storage</text>
      <text x="240" y="884" text-anchor="middle" class="fill-base-content/65 text-[12px]">containers</text>

      <rect x="454" y="812" width="384" height="90" rx="11" class="fill-base-200 stroke-base-300" stroke-width="2" />
      <text x="646" y="842" text-anchor="middle" class="fill-base-content font-semibold text-[13px]">SSD 2 · 500 GB</text>
      <text x="646" y="863" text-anchor="middle" class="fill-base-content/65 text-[12px]">Immich · DVR Agent · n8n storage</text>
      <text x="646" y="884" text-anchor="middle" class="fill-base-content/65 text-[12px]">backup destination</text>

      <text x="440" y="924" text-anchor="middle" class="fill-base-content/60 text-[12px]">
        21:00 — scheduled Proxmox backup, all containers, to the local disk
      </text>

      <!-- ============ alerting ============ -->
      <line x1="440" y1="940" x2="440" y2="962" class="stroke-base-content/45" stroke-width="2" marker-end="url(#nt-arrow)" />

      <rect x="20" y="966" width="840" height="76" rx="12" class="fill-base-100 stroke-base-300" stroke-width="2" />
      <text x="440" y="996" text-anchor="middle" class="fill-base-content font-semibold text-[13.5px]">
        Uptime Kuma → webhook → Discord
      </text>
      <text x="440" y="1017" text-anchor="middle" class="fill-base-content/65 text-[12px]">
        ICMP pings to hosts, NPMplus and databases · HTTP checks against exposed sites
      </text>
      <text x="440" y="1034" text-anchor="middle" class="fill-base-content/45 text-[11.5px]">
        outbound only — the alerting path adds no inbound exposure
      </text>

      <!-- ============ Headscale note ============ -->
      <rect x="20" y="1058" width="840" height="44" rx="10" class="fill-base-200 stroke-base-300" stroke-width="1.5" stroke-dasharray="5 4" />
      <text x="440" y="1078" text-anchor="middle" class="fill-base-content/55 text-[11.5px]">
        Headscale was evaluated as a self-hosted coordination server, but it is incompatible with the
      </text>
      <text x="440" y="1094" text-anchor="middle" class="fill-base-content/55 text-[11.5px]">
        Cloudflare Tunnel, so the current setup uses Tailscale for day-to-day remote access.
      </text>
    </svg>

    <figcaption class="mt-3 text-xs text-base-content/55 text-center">
      Conceptual diagram — actual forwarding depends on the network rules and the configuration of
      each service.
    </figcaption>
  </figure>
</template>