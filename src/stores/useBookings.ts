import { defineStore } from "pinia"
import type { AddressType } from "@/types/address"

const apiKey = import.meta.env.VITE_POSTCODE_API_KEY

export const useBookingsStore = defineStore("booking", {
  state: () => ({
    isLoading: false,
    errorMsg: "",
    journeyDetails: {
      pickupPostcode: "",
      destinationPostcode: "",
      pickupAddressList: [] as unknown as AddressType,
      destinationAddressList: [] as unknown as AddressType,
      pickupAddress: "",
      destinationAddress: "",
      date: new Date(),
      time: "",
      numberOfPassengers: 1,
      returnJourney: false,
      returnDate: "",
      returnTime: "",
      paymentMethod: [
        "paypal",
        "google pay",
        "visa card",
        "apple pay",
      ],
    },
  }),

  getters: {},

  actions: {
    async getPickupAddress() {
      try {
        const res = await fetch(
          `https://api.getAddress.io/autocomplete/${this.journeyDetails.pickupPostcode}
          ?api-key=${apiKey}&all=true`
        )
        const add = await res.json()
        console.log(add)
        this.journeyDetails.pickupAddressList = add.suggestions
      } catch (error) {
        console.log(error.message)
      }
    },

    async getDestinationAddress() {
      try {
        const res = await fetch(
          `https://api.getAddress.io/autocomplete/${this.journeyDetails.destinationPostcode}
          ?api-key=${apiKey}&all=true`
        )
        const add = await res.json()
        console.log(add)
        this.journeyDetails.destinationAddressList = add.suggestions
      } catch (error) {
        console.log(error.message)
      }
    },

    setPickUpAddress(address: string) {
      this.journeyDetails.pickupAddress = address
    },

    setDestinationAddress(address: string) {
      this.journeyDetails.destinationAddress = address
    },
  },
})
