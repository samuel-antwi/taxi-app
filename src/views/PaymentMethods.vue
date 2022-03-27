<script setup lang="ts">
  import IconPayment from "~icons/mdi/credit-card-outline"
  import SideNav from "../components/accounts/SideNav.vue"
</script>

<template>
  <div
    class="grid max-w-6xl min-h-screen grid-cols-1 gap-8 px-4 pt-32 mx-auto md:grid-cols-3"
  >
    <side-nav class="col-span-1" />

    <div class="col-span-2 account-wrapper account-payment">
      <div>
        <icon-payment class="mb-4 text-4xl" />
        <h1 class="text-2xl font-bold tracking-widest uppercase">
          Payment methods
        </h1>
        <router-link :to="{ name: 'add-payment-method' }">
          <button
            class="uppercase border-2 text[1rem] hover:bg-gray-100 border-gray-300 py-3 px-10 tracking-wider font-semibold my-4"
          >
            Add new payment method
          </button>
        </router-link>
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
