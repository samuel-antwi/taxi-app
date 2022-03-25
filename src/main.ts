import { createApp } from "vue"
import { createPinia } from "pinia"
import "@/assets/styles/global.css"
import "@/assets/styles/index.css"

import App from "./App.vue"
import router from "./router"
import { watch } from "vue"

const pinia = createPinia()
const app = createApp(App)

if (localStorage.getItem("state")) {
  pinia.state.value = JSON.parse(localStorage.getItem("state"))
}

watch(
  pinia.state,
  (state) => {
    localStorage.setItem("state", JSON.stringify(state))
  },
  { deep: true }
)

app.use(pinia)
app.use(router)

app.mount("#app")
