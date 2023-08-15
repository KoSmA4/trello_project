import {createRouter, createWebHistory} from "vue-router";
import Client from '@/pages/Client.vue'
import WorkingSpace from "@/pages/WorkingSpace.vue";
import Authorization from "@/pages/Login.vue";
import Registration from "@/pages/Registration.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import authService from "@/services/auth.service";

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: DefaultLayout,
        children: [
            {
                path: 'home',
                name: 'home',
                component: Home,
            },
            {
                path: 'client',
                name: 'client',
                component: Client,
            },
        ]
    },
    {
        path: '/auth',
        component: AuthLayout,
        children: [
            {
                path: 'registration',
                component: Registration,
            },
            {
                path: 'login',
                component: Login,
            },
            {
                path: 'home',
                redirect: '/home',
                component: Home,
            },
        ]
    },
    {
        path: '/login',
        redirect: '/auth/login',
    },
    {
        path: '/registration',
        redirect: '/auth/registration',
    },
    {
        path: '/client',
        redirect: '/home/client',
    },
    // После регистрации добавить эту маршрутизацию

    // {
    //     path: '/working-space',
    //     component: WorkingSpace,
    // },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

router.beforeEach((to, from, next) => {
    console.log(to, from);
    if (to.name === 'home' && !authService.isLoggedIn()) {
        next({name: 'login'});
    }
    // else if (authService.isLoggedIn() && to.name !== 'home') {
    //     next({name: 'home'});
    // }
    else {
        next();
    }
    next();
});

export default router