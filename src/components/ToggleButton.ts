import { defineComponent, h, toRefs, isVue2 } from "vue-demi";

const emits = isVue2 ? ["input"] : ["update:modelValue"];

export const ToggleButton = defineComponent({
  name: "ToggleButton",
  props: {
    modelValue: Boolean,
  },
  emits,
  setup(props, ctx) {
    const { modelValue } = toRefs(props);

    return () =>
      h("div", {}, [
        h(
          "button",
          isVue2
            ? () =>
                onClickVue2(() => {
                  const vModelEmitEvent = isVue2
                    ? "input"
                    : "update:modelValue";
                  ctx.emit(vModelEmitEvent, !modelValue.value);
                })
            : () =>
                onClickVue3(() => {
                  const vModelEmitEvent = isVue2
                    ? "input"
                    : "update:modelValue";
                  ctx.emit(vModelEmitEvent, !modelValue.value);
                }),
          "Toggle"
        ),
        h("p", `Selected: ${modelValue.value}`),
      ]);
  },
});

function onClickVue2(callback: Function) {
  return {
    on: {
      click: () => callback(),
    },
  };
}

function onClickVue3(callback: Function) {
  return {
    onClick: () => callback(),
  };
}
