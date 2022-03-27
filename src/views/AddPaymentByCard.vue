<script setup lang="ts">
  import { reactive, ref } from "vue"
  import SideNav from "@/components/accounts/SideNav.vue"

  const paymentCard = reactive({
    cardIssuer: "Please select one",
    fullName: "",
    cardNumber: null,
    expiryYear: "",
    expiryMonth: "",
    securityCode: "",
    addressLineOne: "",
    city: "",
    postCode: "",
    country: "",
  })

  const cardType = [
    { name: "Visa Credit" },
    { name: "Visa Debit" },
    { name: "Visa Electron" },
    { name: "Maestro" },
    { name: "MasterCard" },
  ]

  const months = [
    "Months",
    "10",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ]

  const years = ["22", "23", "24", "25", "26", "27", "28", "29", "30"]

  let selectedMonth = ref("Month")
  let selectedYear = ref("Year")
</script>

<template>
  <div
    class="grid max-w-6xl min-h-screen grid-cols-1 gap-8 px-4 pt-32 mx-auto md:grid-cols-3"
  >
    <SideNav class="col-span-1" />
    <div
      class="col-span-2 p-8 bg-white border-gray-500 rounded-lg dark:border dark:bg-at-dark-primary"
    >
      <h2 class="mb-2 uppercase">Add card</h2>
      <p class="mb-8">
        Now please enter your card details exactly as they are
        printed.
      </p>

      <form class="w-full md:w-7/12">
        <div class="flex flex-col mb-5">
          <label class="mb-1" for="full name">Name on card</label>
          <input
            v-model="paymentCard.fullName"
            class="py-3"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="block mb-1" for="card type">Card type</label>
          <select
            v-model="paymentCard.cardIssuer"
            class="flex flex-col w-full py-3"
            id="card type"
          >
            <option
              v-text="card.name"
              v-for="card in cardType"
              :key="card.name"
              :value="card.name"
            ></option>
          </select>
        </div>

        <div class="flex flex-col mb-5">
          <label class="mb-1" for="card number">Card number</label>
          <div class="relative">
            <input
              v-model="paymentCard.cardNumber"
              class="w-full py-3"
              id="card number"
              type="text"
            />
            <img
              loading="lazy"
              class="absolute right-5 top-[33%]"
              src="@/assets/images/card.svg"
              alt="Card"
            />
          </div>
        </div>
        <div class="expiry-date">
          <label class="block mb-1" for="card type"
            >Expiry date</label
          >
          <div class="grid grid-cols-6 mb-5 gap-x-5">
            <div class="col-span-3">
              <select
                v-model="selectedMonth"
                class="flex flex-col w-full py-3"
                id="card type"
              >
                <option
                  v-text="month"
                  v-for="month in months"
                  :key="month"
                  :value="month"
                ></option>
              </select>
            </div>
            <div class="col-span-2">
              <select
                v-model="paymentCard.expiryYear"
                class="flex flex-col w-full py-3 mb-5"
                id="card type"
              >
                <option
                  v-text="year"
                  v-for="year in years"
                  :key="year"
                  :value="year"
                ></option>
              </select>
            </div>
          </div>
        </div>

        <div class="flex items-center mb-8">
          <input class="w-6 h-6 mr-2" type="checkbox" />
          <p class="" for="card number">
            Set as default payment method
          </p>
        </div>

        <button
          class="w-full px-4 py-3 font-semibold tracking-widest text-gray-100 uppercase bg-gray-800 dark:hover:bg-at-dark-secondary hover:bg-gray-900"
        >
          Save card
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
