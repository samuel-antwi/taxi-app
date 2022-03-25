<script setup lang="ts">
  import AvatarViewVue from "./AvatarView.vue"
  import TabsView from "@/components/accounts/tabs/TabsView.vue"
  import AccountSignOut from "./AccountSignOut.vue"
</script>

<template>
  <div>
    <AvatarViewVue class="mb-2" />
    <TabsView />
    <AccountSignOut />
  </div>
</template>
