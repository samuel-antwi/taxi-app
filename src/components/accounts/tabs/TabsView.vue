<script setup lang="ts">
  import IconTaxi from "~icons/mdi/taxi"
  import IconPayment from "~icons/mdi/credit-card-outline"
  import IconUser from "~icons/mdi/card-account-details-outline"
  import { ref } from "vue"

  import { useTabs } from "@/composables/useTabs"

  const { activeTab, getActiveTab } = useTabs()

  let tabs = ref([
    { id: 1, name: "Account details", key: "my-details" },
    { id: 2, name: "My bookings", key: "my-bookings" },
    { id: 3, name: "Payment methods", key: "my-payment-details" },
  ])
</script>

<template>
  <button
    v-bind:class="{ active: activeTab === tab.name }"
    @click="getActiveTab(tab.name)"
    v-for="tab in tabs"
    :key="tab.id"
    type="button"
    class="flex items-center w-full p-6 mb-2 bg-white"
  >
    <icon-taxi
      v-if="tab.key === 'my-bookings'"
      class="mr-4 text-2xl"
    />
    <icon-payment
      v-if="tab.key === 'my-payment-details'"
      class="mr-4 text-2xl"
    />
    <icon-user
      v-if="tab.key === 'my-details'"
      class="mr-4 text-2xl"
    />
    <h1 class="text-lg">{{ tab.name }}</h1>
  </button>
</template>

<style lang="scss" scoped>
  button:hover h1 {
    text-decoration: underline;
  }

  .active {
    border-left: 4px solid #2870ce;
  }
</style>
