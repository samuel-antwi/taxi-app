<script setup lang="ts">
  import IconTaxi from "~icons/mdi/taxi"
  import { useTabs } from "@/composables/useTabs"

  const { activeTab } = useTabs()
</script>

<template>
  <div
    v-show="activeTab === 'My bookings'"
    class="p-8 bg-white shadow-lg account-bookings"
  >
    <div>
      <icon-taxi class="mb-4 text-4xl" />
      <h1
        class="text-3xl font-bold tracking-wider text-gray-700 uppercase"
      >
        My Bookings
      </h1>
      <p class="pt-4 mb-8 text-gray-700">
        This page allows you to view all of the information about you
        previous and upcoming bookings:
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .account-bookings {
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
