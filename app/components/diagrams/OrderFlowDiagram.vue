<template>
  <figure class="w-full">
    <svg
      viewBox="0 0 700 660"
      class="w-full h-auto"
      role="img"
      aria-labelledby="order-flow-title order-flow-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="order-flow-title">
        Order flow from the WooCommerce storefront to the Goldylocks invoicing system
      </title>
      <desc id="order-flow-desc">
        A customer browses a catalog of about 21,000 articles in WooCommerce and pays through
        iThenPay. A nightly job keeps products and stock updated. The order data is transformed into
        customer, address, product lines, prices and VAT, then transmitted one-way to the Goldylocks
        ERP for invoicing. The order is marked completed in the store while management stays
        centralized in the ERP.
      </desc>

      <defs>
        <marker
          id="of-arrow"
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
          id="of-arrow-strong"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" class="fill-primary" />
        </marker>
      </defs>

      <!-- ============ row 1: customer + store + payment ============ -->
      <rect x="20" y="20" width="200" height="88" rx="12" class="fill-base-200 stroke-base-300" stroke-width="2" stroke-dasharray="5 4" />
      <text x="120" y="58" text-anchor="middle" class="fill-base-content/85 font-semibold text-[14px]">
        Customer
      </text>
      <text x="120" y="80" text-anchor="middle" class="fill-base-content/55 text-[12px]">
        browses · adds to cart · pays
      </text>

      <rect x="250" y="20" width="200" height="88" rx="12" class="fill-base-100 stroke-base-300" stroke-width="2" />
      <text x="350" y="52" text-anchor="middle" class="fill-base-content font-semibold text-[15px]">
        WooCommerce store
      </text>
      <text x="350" y="74" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        ~21,000 articles
      </text>
      <text x="350" y="93" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        catalog · customers · orders
      </text>

      <rect x="480" y="20" width="200" height="88" rx="12" class="fill-base-100 stroke-base-300" stroke-width="2" />
      <text x="580" y="52" text-anchor="middle" class="fill-base-content font-semibold text-[15px]">
        iThenPay
      </text>
      <text x="580" y="74" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        payment by reference
      </text>
      <text x="580" y="93" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        completed at checkout
      </text>

      <line x1="220" y1="64" x2="243" y2="64" class="stroke-base-content/45" stroke-width="2" marker-end="url(#of-arrow)" />
      <line x1="450" y1="64" x2="473" y2="64" class="stroke-base-content/45" stroke-width="2" marker-end="url(#of-arrow)" />

      <!-- ============ nightly catalog job ============ -->
      <rect x="250" y="150" width="200" height="92" rx="12" class="fill-base-100 stroke-base-300" stroke-width="2" stroke-dasharray="5 4" />
      <text x="350" y="182" text-anchor="middle" class="fill-base-content font-semibold text-[14px]">
        Nightly job
      </text>
      <text x="350" y="205" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        new products imported
      </text>
      <text x="350" y="224" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        stock levels refreshed
      </text>

      <path d="M 350 108 L 350 143" class="stroke-base-content/35" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#of-arrow)" />

      <!-- ============ transformation ============ -->
      <rect x="20" y="290" width="660" height="130" rx="14" class="fill-primary/8 stroke-primary/45" stroke-width="2" />
      <text x="350" y="324" text-anchor="middle" class="fill-primary font-semibold text-[15px]">
        Order data transformation
      </text>
      <text x="350" y="349" text-anchor="middle" class="fill-base-content/75 text-[13px]">
        customer · address · product lines
      </text>
      <text x="350" y="372" text-anchor="middle" class="fill-base-content/75 text-[13px]">
        quantities · unit prices · VAT rates
      </text>
      <line x1="50" y1="392" x2="650" y2="392" class="stroke-primary/25" stroke-width="1.5" />
      <text x="350" y="406" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        mapped into a single commercial payload
      </text>

      <path d="M 350 242 L 350 283" class="stroke-primary/60" stroke-width="2.5" marker-end="url(#of-arrow-strong)" />

      <!-- ============ transmission to ERP ============ -->
      <rect x="250" y="470" width="200" height="88" rx="12" class="fill-base-100 stroke-base-300" stroke-width="2" />
      <text x="350" y="508" text-anchor="middle" class="fill-base-content font-semibold text-[15px]">
        Goldylocks ERP
      </text>
      <text x="350" y="530" text-anchor="middle" class="fill-base-content/60 text-[13px]">
        invoicing &amp; commercial management
      </text>
      <text x="350" y="549" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        single source of truth
      </text>

      <path d="M 350 420 L 350 463" class="stroke-primary" stroke-width="2.5" marker-end="url(#of-arrow-strong)" />
      <text x="358" y="448" text-anchor="middle" class="fill-primary text-[11.5px]">transmit</text>

      <!-- ============ result ============ -->
      <rect x="20" y="600" width="660" height="44" rx="12" class="fill-base-200 stroke-base-300" stroke-width="2" />
      <text x="350" y="628" text-anchor="middle" class="fill-base-content/70 text-[12.5px]">
        Order marked completed in the store — one-way transmission, management stays centralized in the Goldylocks ERP.
      </text>
    </svg>

    <figcaption class="mt-3 text-xs text-base-content/55 text-center">
      Conceptual flow — the nightly synchronization and the one-way transmission are deliberately
      separate, so the diagram does not imply closed-loop invoicing.
    </figcaption>
  </figure>
</template>