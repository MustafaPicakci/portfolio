
import { createRouter, createWebHistory } from "vue-router";

import Profile from "../views/Profile"
import Education from "../views/Education"
import Experiences from "../views/Experiences"
import Skills from "../views/Skills"
import Projects from "../views/Projects"

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
    },
    {
        path: "/projects",
        name: "projects",
        component: Projects,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;