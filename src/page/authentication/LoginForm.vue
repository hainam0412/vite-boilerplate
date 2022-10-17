<template>
    <div class="login-page">
        <form @submit.prevent="submit">
            <span class="p-float-label">
                <InputText id="email" v-model="formData.email" type="text" />
                <label for="email">Email</label>
            </span>
            <span class="p-float-label">
                <InputText id="password" v-model="formData.password" type="password" autocomplete="off" />
                <label for="password">Password</label>
            </span>
            <Button label="Submit" class="p-button-success" />
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default defineComponent({
    name: 'LoginForm',
    components: {
        InputText,
        Button,
    },
    setup() {
        const formData = ref<{ email: string; password: string }>({
            email: '',
            password: '',
        });

        const submit = () => {
            console.log('abv');
        };

        return {
            submit,
            formData,
        };
    },
});
</script>

<style scoped lang="scss">
.login-page {
    @apply grid place-items-center h-screen;

    form {
        @apply grid gap-7;
    }
}
</style>
