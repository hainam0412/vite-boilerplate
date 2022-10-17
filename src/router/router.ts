import { createRouter, createWebHashHistory } from 'vue-router';
import { checkLogin } from './guard/router-authentication';
import { routes } from './routes/routes';

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    checkLogin(to, from, next);
});

export { router };
