<script setup lang="ts">
  import { useBookingsStore } from "@/stores/useBookings"
  import IconClose from "~icons/mdi/close"
  import IconMapMarker from "~icons/mdi/map-marker"

  const store = useBookingsStore()
  const journeyDetails = store.journeyDetails

  const clearAddress = (e: string) => {
    if (e === journeyDetails.pickupAddress) {
      journeyDetails.pickupAddress = ""
      journeyDetails.pickupPostcode = ""
    }
  }

  // Set pickup address
  const setPickUpAddress = (address: string) => {
    journeyDetails.pickupAddress = address
  }
</script>

<template>
  <div class="flex flex-col w-full">
    <label
      class="flex justify-between mb-1 text-sm font-semibold uppercase"
      for="pickup"
    >
      <h1>Pickup Address</h1>
      <button
        @click="clearAddress(journeyDetails.pickupAddress)"
        v-if="journeyDetails.pickupAddress"
        class="text-sm tracking-wide"
      >
        CLEAR
      </button>
    </label>
    <div class="relative">
      <div class="relative" v-if="journeyDetails.pickupAddress">
        <input
          @focus="clearAddress(journeyDetails.pickupAddress)"
          class="w-full py-3 dark:border-gray-500 dark:bg-at-dark-input"
          v-model="journeyDetails.pickupAddress"
          type="text"
        />
      </div>
      <div v-else>
        <input
          class="w-full py-3 dark:bg-at-dark-input dark:border-gray-500"
          placeholder="Enter Postcode or address"
          type="text"
          v-model="journeyDetails.pickupPostcode"
        />
        <div class="absolute text-gray-500 top-[30%] right-5">
          <button
            @click="journeyDetails.pickupPostcode = ''"
            v-if="journeyDetails.pickupPostcode"
          >
            <icon-close
              v-if="journeyDetails.pickupPostcode"
              class="text-lg"
            />
          </button>
          <icon-map-marker v-else class="text-lg" />
        </div>
      </div>

      <div
        class="absolute z-10 top-[52px]"
        v-if="
          journeyDetails.pickupAddressList?.length > 0 &&
          journeyDetails.pickupPostcode &&
          !journeyDetails.pickupAddress
        "
      >
        <div
          class="overflow-scroll border border-blue-500 rounded-md max-h-60 dark:text-gray-300 bg-gray-50 dark:bg-at-dark-secondary dark:border-gray-500"
        >
          <p class="px-4 py-2 text-xs bg-gray-200 dark:bg-gray-600">
            Keep typing your address for more results.
          </p>
          <ul
            v-for="add in journeyDetails.pickupAddressList"
            :key="add.address"
          >
            <li @click="setPickUpAddress(add.address)">
              <p
                class="px-4 py-2 border-b cursor-pointer hover:bg-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"
              >
                {{ add.address }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
