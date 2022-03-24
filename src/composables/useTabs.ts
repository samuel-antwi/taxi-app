import { ref } from "vue"

const activeTab = ref("Account details")

const getActiveTab = (e: string) => {
  activeTab.value = e
}

export const useTabs = () => {
  return { activeTab, getActiveTab }
}
