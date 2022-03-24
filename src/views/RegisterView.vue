}
<script setup lang="ts">
  import { reactive, ref } from "vue"
  import { useRoute, useRouter } from "vue-router"
  import type { userType } from "@/types/user"
  import supabase from "@/lib/supabase"

  const user = reactive({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    confirmPassword: "",
  })

  let isLoading = ref(false)
  let errorMsg = ref("")

  const route = useRoute()
  const router = useRouter()
  const register = route.name === "register"

  const handleRegister = async () => {
    try {
      isLoading.value = true
      let { error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
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
    class="min-h-screen dark:bg-at-dark-primary bg-[#EEEEEE] pt-32"
  >
    <div
      class="max-w-xl p-8 mx-auto bg-white rounded-lg shadow-lg dark:bg-at-dark-secondary"
    >
      <div class="flex justify-between">
        <router-link
          class="font-semibold tracking-wider uppercase border-b-4"
          :to="{ name: 'login' }"
          >Sign in</router-link
        >
        <div class="border-r-4"></div>
        <h3
          v-if="register"
          v-bind:class="{ active: register }"
          class="font-semibold tracking-wider uppercase border-b-4"
        >
          Register
        </h3>
        <router-link
          v-else
          v-bind:class="{ active: register }"
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
        <form @submit.prevent="handleRegister">
          <!-- <div class="flex flex-col mb-6">
            <label
              class="mb-2 font-semibold tracking-wider text-gray-600 uppercase"
              for="first name"
              >First name:</label
            >
            <input
              v-model="user.firstName"
              class="py-3 dark:bg-at-dark-secondary"
              type="text"
            />
          </div> -->
          <!-- <div class="flex flex-col mb-6">
            <label
              class="mb-2 font-semibold tracking-wider text-gray-600 uppercase"
              for="last name"
              >Last name:</label
            >
            <input
              v-model="user.lastName"
              class="py-3 dark:bg-at-dark-secondary"
              type="text"
            />
          </div> -->
          <div class="flex flex-col mb-6">
            <label
              class="mb-2 font-semibold tracking-wider text-gray-600 uppercase"
              for="email"
              >Email address:</label
            >
            <input
              v-model="user.email"
              class="py-3 dark:bg-at-dark-secondary"
              type="text"
            />
          </div>
          <!-- <div class="flex flex-col mb-6">
            <label
              class="mb-2 font-semibold tracking-wider text-gray-600 uppercase"
              for="mobile number"
              >Mobile number:</label
            >
            <input
              v-model="user.mobile"
              class="py-3 dark:bg-at-dark-secondary"
              type="text"
              id="mobile number"
            />
          </div> -->
          <div class="flex flex-col mb-6">
            <label
              class="mb-2 font-semibold tracking-wider text-gray-600 uppercase"
              for="password"
              >Password:</label
            >
            <input
              v-model="user.password"
              class="py-3"
              type="password"
            />
          </div>

          <div class="flex flex-col">
            <label
              class="mb-2 font-semibold tracking-wider text-gray-600 uppercase"
              for="confirm password"
              >Confirm Password:</label
            >
            <input
              v-model="user.confirmPassword"
              class="py-3"
              type="password"
              id="confirm password"
            />
          </div>
          <button
            :disabled="isLoading"
            class="w-full py-3 mt-5 font-semibold tracking-wider uppercase bg-gray-700 disabled:bg-gray-400 text-gray-50 dark:text-gray-300"
          >
            <span v-if="isLoading">Loading...</span>
            <span v-else>Submit</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .active {
    border-bottom: 4px solid #0770cf !important;
  }
</style>
