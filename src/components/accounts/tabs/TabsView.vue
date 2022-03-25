<script setup lang="ts">
  import AccountTab from "./AccountTab.vue"
  import BookingTab from "./BookingTab.vue"
  import PaymentTab from "./PaymentTab.vue"
</script>

<template>
  <div>
    <AccountTab />
    <BookingTab />
    <PaymentTab />
  </div>
</template>

<style lang="scss" scoped>
  button:hover h1 {
    text-decoration: underline;
  }
</style>
