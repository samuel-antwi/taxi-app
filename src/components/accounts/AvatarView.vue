<script setup lang="ts">
  import { useUser } from "@/stores/useUser"
  import { computed } from "vue"
  import IconUser from "~icons/mdi/account"

  const userProfileStore = useUser()

  const userProfile = computed(() => userProfileStore.setUserProfile)
</script>

<template>
  <div class="account-wrapper">
    <div class="flex items-center">
      <div
        class="flex items-center justify-center -ml-3 text-gray-100 bg-gray-800 rounded-full dark:text-gray-200 md:h-28 md:w-28 w-14 h-14"
      >
        <h1
          v-if="
            userProfile.profile.firstName &&
            userProfile.profile.lastName
          "
        >
          <span
            class="text-lg font-bold tracking-widest md:text-4xl"
            >{{ userProfile.profile.firstName.charAt(0) }}</span
          >
          <span class="text-lg font-bold tracking-widest md:text-4xl">
            {{ userProfile.profile.lastName.charAt(0) }}</span
          >
        </h1>
        <icon-user v-else class="text-2xl" />
      </div>
      <div class="ml-3 dark:text-gray-400">
        <p class="mb-1 text-lg">Hi,</p>
        <div class="font-semibold text-gray-700 dark:text-gray-400">
          <span class="mr-2 text-xl tracking-wider">{{
            userProfile.profile.firstName
          }}</span>
          <span class="text-xl tracking-wider">{{
            userProfile.profile.lastName
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
