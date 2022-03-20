<script setup lang="ts">
  import { useBookingsStore } from "@/stores/useBookings"
  const store = useBookingsStore()
  const journeyDetails = store.journeyDetails

  const toggleReturn = () => {
    journeyDetails.returnjourney = !journeyDetails.returnjourney
  }
</script>

<template>
  <div class="flex items-center py-8 space-x-4">
    <h3>Return journey ?</h3>
    <div class="form-control">
      <label class="cursor-pointer label">
        <input
          @change="toggleReturn"
          type="checkbox"
          :checked="journeyDetails.returnjourney"
          class="checkbox checkbox-primary"
        />
      </label>
    </div>
  </div>
</template>
