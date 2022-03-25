<script setup lang="ts">
  import IconPayment from "~icons/mdi/credit-card-outline"
  import { useTabs } from "@/composables/useTabs"
  import PaypalPayment from "./payments/PaypalPayment.vue"
  import ApplePay from "./payments/ApplePay.vue"
  import GooglePay from "./payments/GooglePay.vue"

  const { activeTab } = useTabs()
</script>

<template>
  <div
    v-show="activeTab === 'Payment methods'"
    class="p-8 bg-gray-100 shadow-lg account-payment"
  >
    <div>
      <icon-payment class="mb-4 text-4xl" />
      <h1
        class="text-3xl font-bold tracking-wider text-gray-700 uppercase"
      >
        Payment methods
      </h1>
      <p class="pt-4 mb-8 text-gray-700">
        Below are your payment methods.
      </p>
      <paypal-payment />
      <apple-pay />
      <google-pay />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .account-payment {
    animation-duration: 0.7s;
    animation-name: slidein;
  }

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 100%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
</style>
