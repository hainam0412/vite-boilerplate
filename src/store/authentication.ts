import { defineStore } from 'pinia';
import { ref } from 'vue';

export const authenticationStore = defineStore('authentication', () => {
    const isLogin = ref(false);
    function login(): void {
        isLogin.value = true;
    }

    function logout(): void {
        isLogin.value = false;
    }

    return { isLogin, login, logout };
});
