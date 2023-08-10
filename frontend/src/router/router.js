import {createRouter, createWebHistory} from "vue-router";
import Client from '@/pages/Client.vue'
import WorkingSpace from "@/pages/WorkingSpace.vue";
import Authorization from "@/pages/Authorization.vue";

const routes = [
    {
        path: '/client',
        component: Client,
    },
    {
        path: '/working-space',
        component: WorkingSpace,
    },
    {
        path: '/authorization',
        component: Authorization,
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router