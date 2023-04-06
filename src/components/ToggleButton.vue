<template>
  <div>
    <button @click="onClick">Toggle</button>
    <p>Selected: {{displayValue}}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

export interface Props {
  value?: boolean | undefined;
  modelValue?: boolean | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
  modelValue: undefined,
})

const isVue2 = computed(() => props.value !== undefined);
const displayValue = computed(() => isVue2.value ? props.value : props.modelValue);

const emits = defineEmits<{
  (event: "input", value: boolean): void;
  (event: "update:modelValue", value: boolean): void;
}>();

function onClick() {
  if (isVue2.value) {
    emits("input", !props.value);
  } else {
    emits("update:modelValue", !props.modelValue);
  }
}
</script>
