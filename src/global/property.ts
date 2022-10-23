import mitt from 'mitt';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerProperty = (app: any) => {
    const emitter = mitt();
    app.config.globalProperties.emitter = emitter;
};
