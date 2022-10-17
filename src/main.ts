import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import './style.scss';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import { router } from './router/router';

const store = createPinia();
store.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(store).use(PrimeVue).use(router).mount('#app');
