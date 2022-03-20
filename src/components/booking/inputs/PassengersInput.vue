<script setup lang="ts">
  import { useBookingsStore } from "@/stores/useBookings"
  import { storeToRefs } from "pinia"

  const store = useBookingsStore()

  const { journeyDetails } = storeToRefs(store)

  const increasePassengers = () => {
    if (journeyDetails.value.numberOfPassengers <= 9) {
      journeyDetails.value.numberOfPassengers++
    }
  }
  const decreasePassengers = () => {
    if (journeyDetails.value.numberOfPassengers > 1) {
      journeyDetails.value.numberOfPassengers--
    }
  }
</script>

<template>
  <div class="py-8">
    <div class="flex items-center space-x-10">
      <h3>Passengers</h3>
      <div class="flex items-center space-x-5">
        <button
          @click="decreasePassengers"
          :disabled="journeyDetails.numberOfPassengers === 1"
          type="button"
          class="w-8 h-8 text-lg bg-indigo-600 rounded-full disabled:bg-indigo-300 hover:bg-indigo-700 text-gray-50"
        >
          &minus;
        </button>
        <p class="font-semibold">
          {{ journeyDetails.numberOfPassengers }}
        </p>
        <button
          :disabled="journeyDetails.numberOfPassengers === 10"
          type="button"
          @click="increasePassengers"
          class="w-8 h-8 text-lg bg-indigo-600 rounded-full disabled:bg-indigo-300 hover:bg-indigo-700 text-gray-50"
        >
          &plus;
        </button>
      </div>
    </div>
    <small
      v-if="journeyDetails.numberOfPassengers === 10"
      class="text-red-500"
      >Maximum number of passengers reached!</small
    >
  </div>
</template>
