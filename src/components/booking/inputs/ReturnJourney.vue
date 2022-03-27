<script setup lang="ts">
  import { useBookingsStore } from "@/stores/useBookings"
  import { Switch } from "@headlessui/vue"
  const store = useBookingsStore()
  const journeyDetails = store.journeyDetails
</script>

<template>
  <div class="flex items-center pb-5 space-x-4 border-b">
    <h3>Return journey ?</h3>
    <Switch
      v-model="journeyDetails.returnJourney"
      :class="
        journeyDetails.returnJourney
          ? 'bg-indigo-600'
          : 'dark:bg-at-dark-primary bg-gray-300 dark:border border-gray-600'
      "
      class="relative inline-flex items-center w-12 transition-colors rounded-full h-7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <span
        :class="
          journeyDetails.returnJourney
            ? 'translate-x-6'
            : 'translate-x-1'
        "
        class="inline-block w-4 h-4 transition-transform transform bg-white rounded-full"
      />
    </Switch>
  </div>
</template>
