<script setup lang="ts">
  import { useUser } from "@/stores/useUser"
  import { computed } from "vue"
  import IconUser from "~icons/mdi/account"

  const userProfileStore = useUser()

  const userProfile = computed(() => userProfileStore.setUserProfile)
</script>

<template>
  <div class="py-12 bg-white shadow-md">
    <div class="flex items-center">
      <div
        class="flex items-center justify-center -ml-3 text-gray-100 bg-gray-800 rounded-full h-28 w-28"
      >
        <h1
          v-if="
            userProfile.profile.firstName &&
            userProfile.profile.lastName
          "
        >
          <span class="text-4xl font-bold tracking-widest">{{
            userProfile.profile.firstName.charAt(0)
          }}</span>
          <span class="text-4xl font-bold tracking-widest">
            {{ userProfile.profile.lastName.charAt(0) }}</span
          >
        </h1>
        <icon-user v-else class="text-2xl" />
      </div>
      <div class="ml-3">
        <h2 class="text-lg">Hi,</h2>
        <div class="font-semibold text-gray-700">
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
