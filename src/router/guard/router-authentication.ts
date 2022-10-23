import { useAuthenticationController } from '@/controller/authentication';
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

export const checkLogin = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const authenticationController = useAuthenticationController();
    if (false === authenticationController.isLogin && to.name !== 'Login') {
        next({ name: 'Login' });
    } else {
        next();
    }
};
