<script setup lang="ts">
  import ThemeToggler from "@/components/ThemeToggler.vue"
  import IconTaxi from "@/components/icons/IconTaxi.vue"
</script>

<template>
  <nav class="fixed top-0 w-full py-4 shadow-md nav">
    <div
      class="flex items-center justify-between max-w-6xl px-4 mx-auto"
    >
      <router-link to="/">
        <IconTaxi />
      </router-link>

      <div class="items-center justify-between md:flex space-x-7">
        <div
          class="items-center justify-between hidden md:flex space-x-7"
        >
          <router-link to="/about">About</router-link>
          <router-link to="/about">Account</router-link>
          <router-link to="/about">Sign In</router-link>
        </div>
        <ThemeToggler />
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
  .nav {
    z-index: 1;
  }
</style>
