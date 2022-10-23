import Tooltip from 'primevue/tooltip';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerDirectives = (app: any) => {
    app.directive('tooltip', Tooltip);
};
