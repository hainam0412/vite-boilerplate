import { authenticationStore } from '@/store/authentication';
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

export const checkLogin = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const authentication = authenticationStore();
    if (false === authentication.isLogin && to.name !== 'Login') {
        next({ name: 'Login' });
    } else {
        next();
    }
};
