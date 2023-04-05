import { defineComponent, h, toRefs } from "vue";

export const ToggleButton = defineComponent({
  name: "ToggleButton",
  props: {
    modelValue: Boolean,
  },
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const { modelValue } = toRefs(props);

    return () =>
      h("div", {}, [
        h(
          "button",
          {
            onClick: () => {
              ctx.emit("update:modelValue", !modelValue.value);
            },
          },
          "Toggle"
        ),
        h("p", `Selected: ${modelValue.value}`),
      ]);
  },
});
