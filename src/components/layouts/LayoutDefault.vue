<script setup lang="ts">
  import NavBar from "@/components/NavBar.vue"
  import FooterDefault from "@/components/FooterDefault.vue"
</script>

<template>
  <div
    class="transition duration-200 ease-in-out bg-gray-200 font-futura dark:text-gray-400 dark:bg-at-dark-primary"
  >
    <NavBar />

    <main>
      <slot />
    </main>
    <FooterDefault />
  </div>
</template>

<style></style>
