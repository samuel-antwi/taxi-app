<script setup lang="ts">
  import IconTaxi from "~icons/mdi/taxi"
  import SideNav from "../components/accounts/SideNav.vue"
</script>

<template>
  <div
    class="grid max-w-6xl min-h-screen grid-cols-1 gap-8 px-4 pt-32 mx-auto md:grid-cols-3"
  >
    <side-nav class="col-span-1" />

    <div class="col-span-2 p-8 bg-white shadow-lg account-bookings">
      <div>
        <icon-taxi class="mb-4 text-4xl" />
        <h1
          class="text-3xl font-bold tracking-wider text-gray-700 uppercase"
        >
          My Bookings
        </h1>
        <p class="pt-4 mb-8 text-gray-700">
          This page allows you to view all of the information about
          you previous and upcoming bookings:
        </p>
      </div>
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
