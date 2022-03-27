<script setup lang="ts">
  import IconCalendar from "~icons/mdi/calendar-range"
  import { useBookingsStore } from "@/stores/useBookings"

  const store = useBookingsStore()
  const journeyDetails = store.journeyDetails
</script>

<template>
  <div class="flex flex-col w-full">
    <label class="mb-1 text-sm font-semibold uppercase" for="date"
      >Date and time</label
    >
    <div class="relative">
      <date-picker class="relative" v-model="journeyDetails.date" />
      <icon-calendar
        v-if="!journeyDetails.date"
        class="absolute right-5 top-[35%]"
      />
    </div>
  </div>
</template>

<style>
  .dp__input {
    padding: 0.7rem;
    border: 1px solid rgb(107 114 128);
    border-radius: 0;
  }

  .dark input,
  .dark select {
    color: rgb(156 163 175);
  }
  .dp__input_icon {
    display: none;
  }
</style>
