import { ref, defineComponent, h } from "vue";

export const MyButton = defineComponent({
  name: "MyButton",
  setup(props, ctx) {
    const value = ref(640);

    return () =>
      h(
        "span",
        {
          class: "counter-number",
        },
        `hello m button ${value.value}`
      );
  },
});
