import { createApp } from "vue";
import { createPinia } from "pinia/dist/pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import piniaPluginPersist from "pinia-plugin-persist";
import "animate.css";

const app = createApp(App);
const store = createPinia();

app.use(store);
app.use(router);
app.use(ElementPlus);
store.use(piniaPluginPersist);
app.mount("#app");
