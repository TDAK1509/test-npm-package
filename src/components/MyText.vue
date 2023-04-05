<template>
  <div>Hello world</div>
  <div>My text: {{ text }}</div>
  <slot></slot>
  <div>After slot</div>
</template>

<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>