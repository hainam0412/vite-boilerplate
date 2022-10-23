import { ref } from 'vue';

const bus = ref(new Map());

export function EventBus() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function emit(event: string, ...args: any[]) {
        bus.value.set(event, args);
    }

    return {
        emit,
        bus,
    };
}
