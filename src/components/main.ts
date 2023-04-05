import { defineCustomElement } from "vue";
import type { App } from "vue";
import { MyButton, MyText } from "@/components";

export default {
  install: (app: App) => {
    app.component("MyButton", MyButton);
    app.component("MyText", defineCustomElement(MyText));
  },
};

export { MyButton, MyText };
