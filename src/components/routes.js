import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ApartmentPage from '../pages/ApartmentPage.vue'
import ErrorPage from '../pages/ErrorPage.vue'

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home',
    },
    {
        path: '/apartment/:id',
        component: ApartmentPage,
        name: 'apartment',
    },
    {
        path: '/:pathMatch(.*)*',
        component: ErrorPage,
        name: 'error',
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router