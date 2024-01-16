import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = "https://aso-2201402.main.jp/yogurt/backend/public/";

const app = createApp(App);
app.use(store);
app.mount("#app");
