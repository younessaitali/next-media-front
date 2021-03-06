import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerBaseComponents, loadPlugins } from "@/helpers";
import "@/styles/base.css";
import axios from "./services/api.service.js";

// Export the app, so it can be accessed by plugins
export const app = createApp(App);

/**
 * Specify plugins to load from the /plugins directory
 * Pass file names without any extension like so
 *
 * @example
 *
 * loadPlugins(['vue-fontawesome'])
 */
loadPlugins([]);

/**
 * Automatically imports and registers base components
 * Make sure you have at least one Base components in components/base directory
 */

axios.init(process.env.NODE_ENV === "development" ? "/" : "");

registerBaseComponents(app);

app.use(store)
    .use(router)
    .mount("#app");
