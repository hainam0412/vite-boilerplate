import DialogService from 'primevue/dialogservice';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { router } from '@router/router';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerService = (app: any) => {
    const store = createPinia();
    store.use(piniaPluginPersistedstate);

    app.use(DialogService);
    app.use(store);
    app.use(PrimeVue);
    app.use(router);
};
