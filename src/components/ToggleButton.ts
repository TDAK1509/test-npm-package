import { defineComponent, h, toRefs, isVue2 } from "vue-demi";

const emits = isVue2 ? ["input"] : ["update:modelValue"];

export const ToggleButton = defineComponent({
  name: "ToggleButton",
  props: {
    modelValue: Boolean,
    value: Boolean,
  },
  emits,
  setup(props, ctx) {
    const { modelValue, value } = toRefs(props);

    function onClickVue2() {
      ctx.emit("input", !value.value);
    }

    function onClickVue3() {
      ctx.emit("update:modelValue", !modelValue.value);
    }

    if (isVue2) {
      return () =>
        h(
          "div",
          {
            class: "toggle-button",
          },
          [
            h("button", { on: { click: onClickVue2 } }, "Toggle"),
            h("p", `Selected: ${value.value}`),
          ]
        );
    }

    return () =>
      h("div", { class: "toggle-button" }, [
        h(
          "button",
          {
            onClick: onClickVue3,
          },
          "Toggle"
        ),
        h("p", `Selected: ${modelValue.value}`),
      ]);
  },
});
