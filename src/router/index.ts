import supabase from "@/lib/supabase"
import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/RegisterView.vue"),
    },

    {
      path: "/account",
      name: "account",
      component: () => import("@/views/AccountView.vue"),
      meta: {
        auth: true,
      },
    },
  ],
})

// Route Guard

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  const user = supabase.auth.user()
  if (to.matched.some((res) => res.meta.auth)) {
    if (user) {
      next()
      return
    }
    next({ name: "login" })
  }
  next()
})

export default router
