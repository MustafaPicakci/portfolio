
import { createRouter, createWebHistory } from "vue-router";

import Profile from "../views/Profile"
import Education from "../views/Education"

const routes = [
    {
        path: "/:catchAll(.*)",
        redirect: "/"
    },

    {
        path: "/",
        name: "profile",
        component: Profile,
    },
    {
        path: "/education",
        name: "education",
        component: Education,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;