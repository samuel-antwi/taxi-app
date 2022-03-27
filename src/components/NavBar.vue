<script setup lang="ts">
  import ThemeToggler from "@/components/ThemeToggler.vue"
  // import IconTaxi from "@/components/icons/IconTaxi.vue"
  import IconTaxi from "~icons/mdi/taxi"
  import { useUser } from "@/stores/useUser"
  import supabase from "@/lib/supabase"
  import { computed } from "vue"

  const userStore = useUser()

  const user = computed(() => userStore.user)

  // Sign out user
  const handleSignOut = async () => {
    return await supabase.auth.signOut()
  }
</script>

<template>
  <nav
    class="fixed top-0 w-full py-3 text-gray-200 shadow-md bg-at-dark-secondary nav"
  >
    <div
      class="flex items-center justify-between max-w-6xl px-4 mx-auto"
    >
      <router-link to="/">
        <icon-taxi class="text-4xl" />
      </router-link>

      <div class="items-center justify-between md:flex space-x-7">
        <div
          class="items-center justify-between hidden md:flex space-x-7"
        >
          <router-link to="/about">About</router-link>
          <router-link to="/my-account/my-details"
            >Account</router-link
          >
          <router-link v-if="!user" to="/login">Sign In</router-link>
          <button @click="handleSignOut" v-if="user" type="button">
            Sign Out
          </button>
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
