import { createApp } from 'vue/dist/vue.esm-bundler';
import './style.scss';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import App from './App.vue';
import { appSetup } from './global/setup';

const app = createApp(App);
appSetup(app);

app.mount('#app');
