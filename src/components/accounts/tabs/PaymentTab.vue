<script setup lang="ts">
  import IconPayment from "~icons/mdi/credit-card-outline"
  import { useRoute } from "vue-router"

  const route = useRoute()
</script>

<template>
  <router-link
    v-bind:class="{
      active: route.path.includes('payment-methods'),
    }"
    to="/my-account/payment-methods"
    type="button"
    class="flex items-center w-full p-6 mb-2 bg-white shadow-md hover:bg-gray-100 dark:bg-at-dark-primary dark:border"
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
