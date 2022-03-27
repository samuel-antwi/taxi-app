<script setup lang="ts">
  import IconUser from "~icons/mdi/card-account-details-outline"
  import { useRoute } from "vue-router"
  import { ref } from "vue"

  const route = useRoute()
  let pathName = ref("my-account")
</script>

<template>
  <router-link
    v-bind:class="{ active: route.name === pathName }"
    to="/my-account/my-details"
    type="button"
    class="flex items-center w-full p-6 mb-2 bg-white border-gray-500 shadow-md dark:bg-at-dark-primary dark:border hover:bg-gray-100"
  >
    <icon-user class="mr-4 text-2xl" />
    <h1 class="text-lg">My details</h1>
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
