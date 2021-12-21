
import { createRouter, createWebHistory } from "vue-router";

import Profile from "../views/Profile"
import Education from "../views/Education"
import Experiences from "../views/Experiences"
import Skills from "../views/Skills"
import Projects from "../views/Projects"


const routes = [
    {
        path: "/portfolio",
        name: "profile",
        component: Profile,
    },
    {
        path: "/portfolio/education",
        name: "education",
        component: Education,
    }, {
        path: "/portfolio/experiences",
        name: "experiences",
        component: Experiences,
    },
    {
        path: "/portfolio/skills",
        name: "skills",
        component: Skills,
    },
    {
        path: "/portfolio/projects",
        name: "projects",
        component: Projects,
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;