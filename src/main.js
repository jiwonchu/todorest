import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
window.Kakao.init("3d3493f3627def6f4d6bad5d0eae6f87");
