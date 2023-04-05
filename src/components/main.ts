import type { App } from "vue";
import { ToggleButton } from "@/components";

export default {
  install: (app: App) => {
    app.component("ToggleButton", ToggleButton);
  },
};

export { ToggleButton };
