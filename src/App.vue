<script setup lang="ts">
  import { RouterView } from "vue-router"
  import LayoutDefault from "./components/layouts/LayoutDefault.vue"
  import supabase from "@/lib/supabase"
  import { ref } from "vue"
  import { useUser } from "@/stores/useUser"

  const user = supabase.auth.user()
  let appReady = ref(false)

  const store = useUser()

  // Check if user is logged in
  if (!user) {
    appReady.value = true
  }

  supabase.auth.onAuthStateChange((_, session) => {
    store.setUser(session)
    appReady.value = true
  })
</script>

<template>
  <LayoutDefault>
    <RouterView />
  </LayoutDefault>
</template>

<style></style>
