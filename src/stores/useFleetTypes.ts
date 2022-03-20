import { defineStore } from "pinia"
import supabase from "../lib/supabase.js"
import { useModal } from "../composables/useModal.js"
import type { fleetsType } from "@/types/fleets"
import type { Fleet } from "@/types/fleet"

const { toggleModal } = useModal()

export const useFleetStore = defineStore("taxis", {
  state: () => ({
    fleets: [] as unknown as fleetsType,
    fleet: {} as Fleet,
    isLoading: false,
    errorMsg: "",
  }),

  getters: {},

  actions: {
    async getFleets() {
      try {
        this.isLoading = true
        const { data: fleets, error } = await supabase
          .from("fleets")
          .select("*")
        this.fleets = fleets
        this.isLoading = false
        if (error) throw error
      } catch (error) {
        this.errorMsg = error.message
        console.log(error.message)
      }
    },

    async getFleetById(id: number) {
      try {
        this.isLoading = true
        const { data: fleet, error } = await supabase
          .from("fleets")
          .select("*")
          .eq("id", id)
        if (error) throw error
        this.fleet = fleet[0]
        await toggleModal()
        this.isLoading = false
      } catch (error) {
        this.errorMsg = error.message
        console.log(error.message)
      }
    },
  },
})
