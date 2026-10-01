<template>
  <figure class="w-full">
    <svg
      viewBox="0 0 880 620"
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
        iThenPay. The order is created, a nightly job keeps products and stock updated, the order
        data is transformed into customer, address, product lines, prices and VAT, then transmitted
        to the Goldylocks ERP for invoicing. The order is marked completed in the store while
        management stays centralized in the ERP.
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

      <!-- ============ storefront row ============ -->
      <rect
        x="20"
        y="20"
        width="250"
        height="96"
        rx="12"
        class="fill-base-100 stroke-base-300"
        stroke-width="2"
      />
      <text x="145" y="58" text-anchor="middle" class="fill-base-content font-semibold text-[15px]">
        WooCommerce store
      </text>
      <text x="145" y="80" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        ~21,000 articles
      </text>
      <text x="145" y="99" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        catalog · customers · orders
      </text>

      <rect
        x="315"
        y="20"
        width="200"
        height="96"
        rx="12"
        class="fill-base-100 stroke-base-300"
        stroke-width="2"
      />
      <text x="415" y="58" text-anchor="middle" class="fill-base-content font-semibold text-[15px]">
        iThenPay
      </text>
      <text x="415" y="80" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        payment by reference
      </text>
      <text x="415" y="99" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        completed at checkout
      </text>

      <!-- customer -->
      <rect x="600" y="20" width="260" height="96" rx="12" class="fill-base-200 stroke-base-300" stroke-width="2" stroke-dasharray="5 4" />
      <text x="730" y="62" text-anchor="middle" class="fill-base-content/80 font-semibold text-[14px]">
        Customer
      </text>
      <text x="730" y="84" text-anchor="middle" class="fill-base-content/55 text-[12px]">
        browses · adds to cart · pays
      </text>

      <line x1="270" y1="68" x2="310" y2="68" class="stroke-base-content/45" stroke-width="2" marker-end="url(#of-arrow)" />
      <line x1="730" y1="116" x2="270" y2="72" class="stroke-base-content/35" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#of-arrow)" />
      <text x="500" y="142" text-anchor="middle" class="fill-base-content/50 text-[11.5px]">
        order is created in the store
      </text>

      <!-- ============ nightly catalog job ============ -->
      <rect x="20" y="170" width="250" height="104" rx="12" class="fill-base-100 stroke-base-300" stroke-width="2" stroke-dasharray="5 4" />
      <text x="145" y="202" text-anchor="middle" class="fill-base-content font-semibold text-[14px]">
        Nightly job
      </text>
      <text x="145" y="225" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        new products imported
      </text>
      <text x="145" y="245" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        stock levels refreshed
      </text>
      <text x="145" y="264" text-anchor="middle" class="fill-base-content/45 text-[11.5px]">
        once per night
      </text>

      <path
        d="M 145 116 L 145 166"
        class="stroke-base-content/35"
        stroke-width="2"
        stroke-dasharray="5 4"
        marker-end="url(#of-arrow)"
      />

      <!-- ============ transformation ============ -->
      <rect x="20" y="330" width="495" height="150" rx="14" class="fill-primary/8 stroke-primary/45" stroke-width="2" />
      <text x="267" y="364" text-anchor="middle" class="fill-primary font-semibold text-[15px]">
        Order data transformation
      </text>
      <text x="267" y="389" text-anchor="middle" class="fill-base-content/75 text-[13px]">
        customer · address · product lines
      </text>
      <text x="267" y="412" text-anchor="middle" class="fill-base-content/75 text-[13px]">
        quantities · unit prices · VAT rates
      </text>
      <line x1="60" y1="432" x2="475" y2="432" class="stroke-primary/25" stroke-width="1.5" />
      <text x="267" y="459" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        mapped into a single commercial payload
      </text>

      <path
        d="M 145 274 L 145 300 L 60 300 L 60 326"
        class="stroke-base-content/35"
        stroke-width="2"
        stroke-dasharray="5 4"
        marker-end="url(#of-arrow)"
      />

      <!-- order created -> transformation -->
      <path
        d="M 145 116 L 145 326"
        class="stroke-primary/60"
        stroke-width="2.5"
        marker-end="url(#of-arrow-strong)"
      />

      <!-- ============ transmission ============ -->
      <rect x="590" y="330" width="270" height="150" rx="14" class="fill-base-100 stroke-base-300" stroke-width="2" />
      <text x="725" y="372" text-anchor="middle" class="fill-base-content font-semibold text-[15px]">
        Goldylocks ERP
      </text>
      <text x="725" y="397" text-anchor="middle" class="fill-base-content/60 text-[13px]">
        invoicing &amp; commercial management
      </text>
      <line x1="625" y1="417" x2="825" y2="417" class="stroke-base-300" stroke-width="1.5" />
      <text x="725" y="444" text-anchor="middle" class="fill-base-content/60 text-[12.5px]">
        single source of truth
      </text>

      <line x1="519" y1="405" x2="586" y2="405" class="stroke-primary" stroke-width="2.5" marker-end="url(#of-arrow-strong)" />
      <text x="552" y="392" text-anchor="middle" class="fill-primary text-[11.5px]">transmit</text>

      <!-- ============ result ============ -->
      <rect x="20" y="520" width="840" height="80" rx="12" class="fill-base-200 stroke-base-300" stroke-width="2" />
      <text x="44" y="552" class="fill-base-content font-semibold text-[13.5px]">Result</text>
      <text x="44" y="578" class="fill-base-content/70 text-[12.5px]">
        Order marked completed in the store — one-way transmission, management stays centralized in the Goldylocks ERP.
      </text>

      <path
        d="M 145 480 L 145 556"
        class="stroke-base-content/35"
        stroke-width="2"
        stroke-dasharray="5 4"
        marker-end="url(#of-arrow)"
      />
      <path
        d="M 725 480 L 725 556"
        class="stroke-base-content/35"
        stroke-width="2"
        stroke-dasharray="5 4"
        marker-end="url(#of-arrow)"
      />
    </svg>

    <figcaption class="mt-3 text-xs text-base-content/55 text-center">
      Conceptual flow — actual routing depends on the network rules and the configuration of each
      system.
    </figcaption>
  </figure>
</template>