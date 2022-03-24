<script setup lang="ts">
  import { useRoute, useRouter } from "vue-router"
  import { ref } from "vue"
  import supabase from "@/lib/supabase"

  const route = useRoute()
  const router = useRouter()

  const login = route.name === "login"

  const inputType = ref("password")

  let email = ref("")
  let password = ref("")
  let isLoading = ref(false)
  let errorMsg = ref("")

  // Show or hide password
  const togglePassword = () => {
    if (inputType.value === "password") {
      return (inputType.value = "text")
    } else {
      return (inputType.value = "password")
    }
  }

  const handleLogin = async () => {
    try {
      isLoading.value = true
      let { error } = await supabase.auth.signIn({
        email: email.value,
        password: password.value,
      })

      if (error) throw error
      isLoading.value = false
      router.push({ name: "home" })
    } catch (error) {
      console.log(error)
      errorMsg.value = error.message
      isLoading.value = false
    }
  }
</script>

<template>
  <div
    class="min-h-screen dark:bg-at-dark-primary px-4 bg-[#EEEEEE] pt-32"
  >
    <div
      class="max-w-xl p-8 mx-auto bg-white rounded-lg shadow-lg dark:bg-at-dark-secondary"
    >
      <div class="flex justify-between">
        <h2
          v-if="login"
          v-bind:class="{ active: login }"
          class="font-semibold tracking-wider uppercase border-b-4"
        >
          Sign in
        </h2>
        <router-link
          v-else
          v-bind:class="{ active: login }"
          class="font-semibold tracking-wider uppercase border-b-4"
          :to="{ name: 'login' }"
          >Sign in</router-link
        >
        <div class="border-r-4"></div>
        <router-link
          class="font-semibold tracking-wider uppercase border-b-4"
          :to="{ name: 'register' }"
          >Register</router-link
        >
      </div>
      <div class="pt-10 md:px-10">
        <div v-if="errorMsg" class="py-3 mb-4 bg-gray-100">
          <p class="text-center text-red-500">
            {{ errorMsg }}
          </p>
        </div>
        <form @submit.prevent="handleLogin">
          <div class="flex flex-col mb-6">
            <label
              class="mb-3 font-semibold tracking-wider text-gray-600 uppercase"
              for="email"
              >Email address:</label
            >
            <input
              v-model="email"
              class="py-3 dark:bg-at-dark-secondary"
              type="text"
            />
          </div>
          <div class="flex flex-col">
            <label
              class="mb-3 font-semibold tracking-wider text-gray-600 uppercase"
              for="password"
              >Password:</label
            >
            <div class="relative">
              <input
                v-model="password"
                class="w-full py-3"
                :type="inputType"
              />
              <button
                v-if="password"
                type="button"
                @click="togglePassword"
                class="absolute tracking-wider text-gray-600 right-2 top-3"
              >
                <span v-if="inputType === 'text'">HIDE</span>
                <span v-else>SHOW</span>
              </button>
            </div>
          </div>
          <button
            class="w-full py-3 mt-5 font-semibold tracking-widest uppercase bg-gray-700 text-gray-50 dark:text-gray-300"
          >
            Sign in
          </button>
          <router-link
            class="block pt-6 text-center"
            :to="{ name: 'home' }"
            >Forgot password?</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .active {
    border-bottom: 4px solid #0770cf !important;
  }

  input[type="password"] {
    letter-spacing: 0.3em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 18px;
    color: #374151;
  }
</style>
