import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { loadView } from "./routerUtils";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/",
        name: "ProductForm",
        component: loadView("ProductForm")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
