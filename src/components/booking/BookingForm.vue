<script setup lang="ts">
  import { storeToRefs } from "pinia"
  import { watchEffect } from "vue"
  import Buttonview from "@/components/ButtonView.vue"
  import { useBookingsStore } from "@/stores/useBookings"
  import FleetType from "@/components/fleets/FleetType.vue"
  import PickupInput from "@/components/booking/inputs/PickupInput.vue"
  import DestinationInput from "./inputs/DestinationInput.vue"
  import PickupDate from "./inputs/PickupDate.vue"
  import ReturnDate from "./inputs/ReturnDate.vue"
  import ReturnJourney from "./inputs/ReturnJourney.vue"
  import BookingHeader from "./BookingHeader.vue"
  import PassengersInput from "@/components/booking/inputs/PassengersInput.vue"

  // Get the whole store instance from useBookings store
  const store = useBookingsStore()

  const { isLoading } = storeToRefs(store)

  // Get journey details object from store
  const journeyDetails = store.journeyDetails

  // Fire address search when a user start typing
  // This will only fire when character length are 3 or more
  watchEffect(() => {
    if (journeyDetails.pickupPostcode?.length >= 3)
      store.getPickupAddress()
    if (journeyDetails.destinationPostcode?.length >= 3)
      store.getDestinationAddress()
  })

  // Handle Booking
  const handleBookings = async () => {
    console.log(journeyDetails)

    // Cancel WatchEffect when no longer needed
    watchEffect(() => null)
  }
</script>

<template>
  <main class="flex flex-col justify-center">
    <div v-if="isLoading"></div>
    <div v-else>
      <div
        class="max-w-lg p-6 rounded-md shadow-md booking-form md:p-10 dark:bg-at-dark-secondary bg-gray-50"
      >
        <BookingHeader />
        <!-- <FleetType /> -->
        <form @submit.prevent="handleBookings">
          <div class="grid grid-cols-1 gap-5 pt-8 md:grid-cols-1">
            <PickupInput />
            <DestinationInput />
            <PickupDate />
            <PassengersInput />
            <ReturnJourney />
            <ReturnDate />
          </div>
          <Buttonview class="mt-8" text="Get quote" />
        </form>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .booking-form {
    transition: transform 0.5s ease;
  }
</style>
