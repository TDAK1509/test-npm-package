<template>
  <ToggleButton v-model="selected" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const selected = ref(false);
</script>
