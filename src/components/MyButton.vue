<template>
  <p>{{  text }}</p>
  <button class="btn">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>



<style scoped>
.btn {
  padding: .6rem 1.25rem;
  background-color: #747bff;
  border: 0;
}
.btn:hover {
  background-color: #535bf2;
}
</style>