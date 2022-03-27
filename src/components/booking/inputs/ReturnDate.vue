<script setup lang="ts">
  import { useBookingsStore } from "@/stores/useBookings"
  import IconCalendar from "~icons/mdi/calendar-range"
  const store = useBookingsStore()

  const journeyDetails = store.journeyDetails
</script>

<template>
  <div
    v-if="journeyDetails.returnJourney"
    class="flex flex-col w-full"
  >
    <label class="mb-1 text-sm font-semibold uppercase" for="date"
      >Return Date and time</label
    >
    <div class="relative">
      <date-picker
        class="relative"
        v-model="journeyDetails.returnDate"
      />
      <icon-calendar class="absolute right-5 top-[35%]" />
    </div>
  </div>
</template>
