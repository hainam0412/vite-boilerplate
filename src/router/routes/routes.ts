import { RouteRecordRaw } from 'vue-router';
import Login from '@page/authentication/LoginForm.vue';

const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

export const routes: Readonly<RouteRecordRaw[]> = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login, name: 'Login' },
];
