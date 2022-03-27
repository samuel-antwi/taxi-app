<script setup lang="ts">
  const props = defineProps({
    text: String,
  })
</script>

<template>
  <button class="tracking-wider btn-1">
    {{ props.text }}
  </button>
</template>

<style scoped lang="scss">
  button {
    transition: 200ms ease-in-out;

    &:hover {
      transform: translateY(-5px);
    }
  }
</style>
