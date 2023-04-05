import { createApp } from "vue";
import App from "./App.vue";
import MyLibrary from "./components/main";

createApp(App).use(MyLibrary).mount("#app");
