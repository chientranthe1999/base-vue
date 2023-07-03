import { createApp } from "vue";

import { setupStore } from "@/store";

import "./style.css";
import App from "./App.vue";

const setupAll = async () => {
  const app = createApp(App);

  setupStore(app); // store

  app.mount("#app");
};
setupAll();
