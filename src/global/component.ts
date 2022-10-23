/* eslint-disable vue/no-reserved-component-names */
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import DynamicDialog from 'primevue/dynamicdialog';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerComponent = (app: any) => {
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Button', Button);
    app.component('InputText', InputText);
    app.component('DynamicDialog', DynamicDialog);
};
