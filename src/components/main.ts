import type { App } from "vue";
import { MyButton, MyTest } from "@/components";

export default {
  install: (app: App) => {
    app.component("MyButton", MyButton);
    app.component("MyTest", MyTest);
  },
};

export { MyButton };
