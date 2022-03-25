<script setup lang="ts">
  import IconPayment from "~icons/mdi/credit-card-outline"
  import { useRoute } from "vue-router"

  const route = useRoute()
  console.log(route.name)
</script>

<template>
  <router-link
    v-bind:class="{ active: route.name === 'payment' }"
    to="/my-account/payment-methods"
    type="button"
    class="flex items-center w-full p-6 mb-2 bg-white border-gray-500 shadow-md dark:bg-at-dark-primary dark:border"
  >
    <icon-payment class="mr-4 text-2xl" />
    <h1 class="text-lg">Payment methods</h1>
  </router-link>
</template>

<style lang="scss" scoped>
  button:hover h1 {
    text-decoration: underline;
  }

  .active {
    border-left: 4px solid #2870ce;
  }
</style>
