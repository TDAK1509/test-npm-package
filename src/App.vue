<template>
  <ToggleButton v-model="selected" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import ToggleButton from "@/components/ToggleButton.vue";

const selected = ref(true);
</script>
