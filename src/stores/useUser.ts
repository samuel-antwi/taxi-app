import type { supabaseUserType } from "./../types/supabaseUser"
import supabase from "@/lib/supabase"
import type { userProfileType } from "@/types/user"
import { defineStore, acceptHMRUpdate } from "pinia"

export const useUser = defineStore("userStore", {
  state: () => ({
    user: <supabaseUserType>{},
    resetAccessToken: null,
    profile: <userProfileType>{},
    isLoading: false,
    statusMsg: "",
    errorMsg: "",
  }),

  getters: {
    getUserId: (state) => {
      return state.user.id
    },

    getUserEmail: (state) => {
      return state.user.email
    },

    setUserProfile: (state) => {
      return {
        profile: {
          firstName: state.profile.firstName,
          lastName: state.profile.lastName,
          mobileNumber: state.profile.mobileNumber,
          email: state.user?.email,
        },
      }
    },
  },

  actions: {
    async setUser(payload: object) {
      try {
        this.user = (await payload) ? payload.user : null
      } catch (error) {
        console.log(error)
      }
    },

    // Get user profile
    async getUserProfile(id: string | undefined) {
      try {
        this.isLoading = true
        const { data: user_profile, error } = await supabase
          .from("profiles")
          .select(id)
        if (error) throw error
        this.profile = user_profile[0]
        this.isLoading = false
      } catch (error) {
        console.log(error.message)
        this.statusMsg = error.message
        this.isLoading = false
      }
    },

    // Update user profile
    async updateProfile() {
      try {
        this.isLoading = true
        const { error } = await supabase.from("user_profile").update({
          firstName: this.profile.firstName,
          lastName: this.profile.lastName,
          mobileNumber: this.profile.mobileNumber,
        })

        if (error) throw error
        this.isLoading = false
      } catch (error) {
        console.log(error)
        this.errorMsg = error.message
        this.isLoading = false
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}
