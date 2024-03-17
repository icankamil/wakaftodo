//import vue router
import { createRouter, createWebHistory } from "vue-router";

//define a routes
const routes = [
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "login" */ "../pages/login.vue")
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import(/* webpackChunkName: "register" */ "../pages/register.vue")
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
            import(/* webpackChunkName: "dashboard" */ "../components/app.vue")
    }
];

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // config routes
});

export default router;
