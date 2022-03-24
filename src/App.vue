<script setup lang="ts">
  import { RouterView } from "vue-router"
  import LayoutDefault from "./components/layouts/LayoutDefault.vue"
  import supabase from "@/lib/supabase"
  import { computed, ref, watch } from "vue"
  import { useUser } from "@/stores/useUser"
  import { useRouter } from "vue-router"

  const user = supabase.auth.user()
  let appReady = ref(false)

  const router = useRouter()

  const store = useUser()

  let me = computed(() => store.user)

  // Check if user is logged in
  if (!user) {
    appReady.value = true
  }

  supabase.auth.onAuthStateChange((_, session) => {
    store.setUser(session)
    appReady.value = true
  })

  // If user is null, redirects to login page
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

<style></style>
