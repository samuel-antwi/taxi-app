<script setup lang="ts">
  import IconPayment from "~icons/mdi/credit-card-outline"
  import PaypalPayment from "@/components/accounts/payments/PaypalPayment.vue"
  import ApplePay from "@/components/accounts/payments/ApplePay.vue"
  import GooglePay from "@/components/accounts/payments/GooglePay.vue"
  import SideNav from "../components/accounts/SideNav.vue"
</script>

<template>
  <div
    class="grid max-w-6xl min-h-screen grid-cols-1 gap-8 px-4 pt-32 mx-auto md:grid-cols-3"
  >
    <side-nav class="col-span-1" />

    <div class="col-span-2 p-8 bg-gray-100 shadow-lg account-payment">
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
