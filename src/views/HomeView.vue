<script setup lang="ts">
  import BookingForm from "@/components/booking/BookingForm.vue"
  import PortalVew from "@/components/PortalView.vue"
  import FleetDetails from "../components/fleets/FleetDetails.vue"
  import { useModal } from "@/composables/useModal"

  const modal = useModal()

  const { toggleModal } = modal
</script>

<template>
  <main>
    <div class="min-h-screen pt-32 home">
      <div class="max-w-5xl px-4 mx-auto">
        <BookingForm />
      </div>
    </div>
    <teleport to="#portal-root">
      <PortalVew>
        <FleetDetails :toggleModal="toggleModal" />
      </PortalVew>
    </teleport>
  </main>
</template>

<style lang="scss" scoped>
  /* .home {
    background: url("../assets/images/woman-on-phone.jpeg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    width: 100%;
    height: 100vh;
  } */
</style>
