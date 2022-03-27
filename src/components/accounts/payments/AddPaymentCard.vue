<script setup lang="ts">
  import IconCard from "~icons/mdi/credit-card"
  import { reactive, ref } from "vue"

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
</script>

<template>
  <div class="w-full md:w-7/12">
    <div class="flex flex-col mb-5">
      <label class="mb-1" for="full name">Full name</label>
      <input
        v-model="paymentCard.fullName"
        class="py-3"
        type="text"
      />
    </div>
    <div>
      <label class="block mb-1" for="card type">Card type</label>
      <select
        v-model="paymentCard.cardIssuer"
        class="flex flex-col w-full py-3 mb-5"
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
          class="py-3"
          id="card number"
          type="text"
        />
        <icon-card />
      </div>
    </div>
    <div class="expiry-date">
      <label class="block mb-1" for="card type">Expiry date</label>
      <div class="grid grid-cols-5 gap-5">
        <div class="col-span-2">
          <select
            v-model="paymentCard.expiryMonth"
            class="flex flex-col w-full py-3 mb-5"
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
        <div class="col-span-3">
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
    <div class="flex flex-col mb-5">
      <label class="mb-1" for="security code">security code</label>
      <input
        v-model="paymentCard.securityCode"
        class="py-3"
        id="security code"
        type="text"
      />
    </div>
    <div class="flex flex-col mb-5">
      <label class="mb-1" for="address line one"
        >Address Line 1</label
      >
      <input
        v-model="paymentCard.addressLineOne"
        class="py-3"
        id="address line one"
        type="text"
      />
    </div>
    <div class="flex flex-col mb-5">
      <label class="mb-1" for="city">city</label>
      <input
        v-model="paymentCard.city"
        class="py-3"
        id="city"
        type="text"
      />
    </div>
    <div class="flex flex-col mb-5">
      <label class="mb-1" for="postcode">post code</label>
      <input
        v-model="paymentCard.postCode"
        class="py-3"
        id="postcode"
        type="text"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
