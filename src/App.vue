<script setup lang="ts">
  import { RouterView } from "vue-router"
  import LayoutDefault from "./components/layouts/LayoutDefault.vue"
  import supabase from "@/lib/supabase"
  import { ref, watch } from "vue"
  import { useUser } from "@/stores/useUser"
  import { storeToRefs } from "pinia"
  import { useRouter } from "vue-router"

  const router = useRouter()

  const user = supabase.auth.user()
  let appReady = ref(false)

  const store = useUser()

  const { user: me } = storeToRefs(store)

  // Check if user is logged in
  if (!user) {
    appReady.value = true
  }

  supabase.auth.onAuthStateChange((_, session) => {
    store.setUser(session)
    appReady.value = true
  })

  // Redirect to login page when user logs out
  watch(me, () => {
    if (!me.value) {
      router.push({ name: "login" })
    }
  })
</script>

<template>
  <LayoutDefault>
    <RouterView />
  </LayoutDefault>
</template>

<style>
  body {
    overflow-x: hidden;
  }
</style>
