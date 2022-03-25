<script setup lang="ts">
  import supabase from "@/lib/supabase"
  import IconSignout from "~icons/mdi/logout"

  const handleLogout = async () => {
    return await supabase.auth.signOut()
  }
</script>

<template>
  <button
    @click="handleLogout"
    type="button"
    class="flex items-center w-full p-6 mb-2 bg-white border-gray-500 shadow-md dark:bg-at-dark-primary dark:border mt-7"
  >
    <icon-signout class="mr-4 text-2xl" />
    <h1 class="text-lg">Sign out</h1>
  </button>
</template>

<style lang="scss" scoped>
  button:hover h1 {
    text-decoration: underline;
  }
</style>
