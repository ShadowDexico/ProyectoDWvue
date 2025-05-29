import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { createPinia } from "pinia";
axios.defaults.baseURL = "http://localhost:8081";

const app = createApp(App);
const pinia = createPinia();

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

app.use(pinia);
app.use(router);
app.config.globalProperties.$axios = axios;

app.mount("#app");
