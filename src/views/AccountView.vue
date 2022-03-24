return userStore.getUserProfile(user.value.id)
<script setup lang="ts">
  import { useUser } from "@/stores/useUser"
  import { onMounted } from "vue"
  import AvatarView from "@/components/accounts/AvatarView.vue"
  import AccountDetails from "../components/accounts/AccountDetails.vue"
  import AccountSignOut from "../components/accounts/AccountSignOut.vue"
  import MyBookings from "../components/accounts/MyBookings.vue"
  import TabsView from "@/components/accounts/tabs/TabsView.vue"
  import PaymentMethod from "@/components/accounts/PaymentMethod.vue"

  const userStore = useUser()
  const user = userStore.user
  onMounted(() => {
    return userStore.getUserProfile()
  })
</script>

<template>
  <div v-if="user" class="min-h-screen pt-32">
    <div class="max-w-5xl px-4 mx-auto">
      <h1
        class="mb-5 text-2xl font-bold tracking-widest text-center uppercase"
      >
        My Account
      </h1>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div class="col-span-1">
          <AvatarView class="mb-2" />
          <TabsView />
          <AccountSignOut />
        </div>
        <div class="col-span-2">
          <AccountDetails />
          <MyBookings />
          <PaymentMethod />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .active {
    border-left: 4px solid #2870ce;
  }
</style>
