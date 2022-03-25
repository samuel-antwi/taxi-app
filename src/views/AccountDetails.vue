<script setup lang="ts">
  import IconUser from "~icons/mdi/card-account-details-outline"
  import { computed, onMounted } from "vue"
  import { storeToRefs } from "pinia"
  import SideNav from "@/components/accounts/SideNav.vue"
  import { useUser } from "@/stores/useUser"

  const userStore = useUser()
  const user = userStore.user
  onMounted(() => {
    return userStore.getUserProfile()
  })

  const userProfileStore = useUser()
  const userProfile = computed(() => userProfileStore.setUserProfile)

  const { profile } = storeToRefs(userProfileStore)

  const handleUpdate = async () => {
    await userProfileStore.updateProfile()
  }
</script>

<template>
  <div
    class="grid max-w-6xl min-h-screen grid-cols-1 gap-8 px-4 pt-32 mx-auto md:grid-cols-3"
  >
    <side-nav class="col-span-1" />
    <div
      class="col-span-2 p-8 bg-white border-gray-500 rounded-md shadow-lg dark:border dark:text-gray-200 dark:bg-at-dark-primary account-details"
    >
      <div>
        <div class="text-gray-700 dark:text-gray-200">
          <icon-user class="mb-4 text-4xl" />
          <h1 class="text-3xl font-bold tracking-wider uppercase">
            My details
          </h1>
          <p class="pt-4 mb-8">
            Feel free to edit any of your details below so your
            account is totally up to date.
          </p>

          <form
            class="w-full md:w-8/12"
            @submit.prevent="handleUpdate"
          >
            <div class="flex flex-col mb-6">
              <label
                class="mb-3 font-semibold tracking-wider text-gray-600 uppercase"
                for="first name"
                >First name:</label
              >
              <input
                v-model="profile.firstName"
                class="py-3 tracking-wide uppercase dark:bg-at-dark-secondary"
                type="text"
                id="first name"
              />
            </div>
            <div class="flex flex-col mb-6">
              <label
                class="mb-3 font-semibold tracking-wider text-gray-600 uppercase"
                for="last name"
                >Last name:</label
              >
              <input
                v-model="profile.lastName"
                class="py-3 tracking-wide uppercase dark:bg-at-dark-secondary"
                type="text"
                id="last name"
              />
            </div>
            <div class="flex flex-col mb-6">
              <label
                class="mb-3 font-semibold tracking-wider text-gray-600"
                for="email"
                >Email address:</label
              >
              <input
                disabled
                v-model="userProfile.profile.email"
                class="py-3 disabled:bg-[#E8E8E8] disabled:cursor-not-allowed dark:bg-at-dark-secondary"
                type="text"
                id="email"
              />
            </div>
            <div class="flex flex-col mb-6">
              <label
                class="mb-3 font-semibold tracking-wider text-gray-600 uppercase"
                for="mobile"
                >Mobile phone:</label
              >
              <input
                v-model="profile.mobileNumber"
                class="py-3 dark:bg-at-dark-secondary"
                type="text"
                id="mobile"
              />
            </div>

            <button
              class="w-full py-4 mt-5 font-semibold tracking-widest uppercase bg-gray-700 hover:bg-gray-800 disabled:bg-gray-300 text-gray-50 dark:text-gray-300"
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .account-details {
    animation-duration: 0.7s;
    animation-name: slidein;
  }

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 100%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
</style>
