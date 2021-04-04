
import { createRouter, createWebHistory } from "vue-router";

import Profile from "../views/Profile"
import Education from "../views/Education"
import Experiences from "../views/Experiences"
import Skills from "../views/Skills"

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
    }, {
        path: "/experiences",
        name: "experiences",
        component: Experiences,
    },
    {
        path: "/skills",
        name: "skills",
        component: Skills,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;