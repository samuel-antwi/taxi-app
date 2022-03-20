<script setup lang="ts">
  import { storeToRefs } from "pinia"
  import { useFleetStore } from "@/stores/useFleetTypes"
  import FleetFeatures from "@/components/fleets/FleetFeatures.vue"

  const taxiStore = useFleetStore()

  const { fleet, isLoading } = storeToRefs(taxiStore)
</script>

<template>
  <div v-if="isLoading">
    <h1>Loading...</h1>
  </div>

  <div v-else class="p-5 md:p-10">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
      <img class="" :src="fleet?.image" :alt="fleet?.name" />
      <div>
        <h2
          class="mb-3 text-xl font-semibold tracking-wide capitalize dark:text-gray-300"
        >
          {{ fleet?.name }}
        </h2>
        <p>{{ fleet?.description }}</p>
        <FleetFeatures :fleet="fleet" />
      </div>
    </div>
  </div>
</template>
