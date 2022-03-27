<script setup lang="ts">
  import SideNav from "../components/accounts/SideNav.vue"
  import IconPayment from "~icons/mdi/credit-card-outline"
  import DividerView from "../components/DividerView.vue"
</script>

<template>
  <div
    class="grid max-w-6xl min-h-screen grid-cols-1 gap-8 px-4 pt-32 mx-auto md:grid-cols-3"
  >
    <SideNav class="col-span-1" />
    <div class="col-span-2 account-wrapper h-auto md:h-[25rem]">
      <h2 class="mb-2 uppercase">Add payment method</h2>
      <p class="mb-10">
        Let's begin by selecting a payment method you would like to
        use at checkout.
      </p>
      <div class="py-6">
        <router-link class="block mb-5" :to="{ name: 'card' }">
          <button
            class="flex hover:bg-gray-100 font-semibold uppercase w-full text-sm items-center md:w-[22rem] mx-auto px-4 py-3 dark:hover:bg-at-dark-secondary dark:hover:text-gray-400 text-gray-600 border-2"
          >
            <img src="@/assets/images/card.svg" alt="Card" />
            <h3 class="w-1/2 mx-auto tracking-wider">
              Credit/debit card
            </h3>
          </button>
        </router-link>
        <DividerView />
        <button
          class="flex dark:hover:bg-at-dark-secondary dark:hover:text-gray-400 hover:bg-gray-100 text-sm font-semibold uppercase w-full my-4 items-center md:w-[22rem] mx-auto px-4 py-3 text-gray-600 border-2"
        >
          <img
            class="w-8"
            src="../assets/images/paypal-logo.png"
            alt="Paypal"
          />
          <h3 class="w-1/2 mx-auto tracking-wider">Paypal</h3>
        </button>
      </div>
    </div>
  </div>
</template>
