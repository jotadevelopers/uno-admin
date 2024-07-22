<script setup>
definePageMeta({
    layout: 'blank',
    auth: false
});
const { signIn } = useAuth();
import schema from '../infra/schemas/register';
const loading = ref(false);
const agree = ref(false)
const formData = reactive({ name: '', email: '', password: '' });

async function onSubmit(event) {
    try {
        loading.value = true;
        let response = await $fetch('/api/auth/register', { method: 'POST', body: formData });
        await signIn({ email: formData.email, password: formData.password }, { callbackUrl: '/dashboard' })
        loading.value = false;
    } catch (error) {
        loading.value = false;
        useToast().add({ description: error.message, color: 'red' })
    }
}
</script>
<template>
    <div class="min-h-screen p-2 flex-row justify-center items-center">
        <UCard class="max-w-xl mx-auto shadow-lg">
            <div class="text-center">
                <img src="@/assets/logo.png" alt="Logo" class="mx-auto h-16 dark:bg-gray-600 dark:rounded-full" />
                <h1 class="font-medium text-xl text-gray-700">Welcome to Uno Admin</h1>
                <p class="text-gray-400">Sign-up on our platform and have lots of fun</p>
            </div>

            <UForm :state="formData" :schema class="space-y-4 mt-4" @submit="onSubmit">

                <UFormGroup label="User Name" name="name">
                    <UInput v-model="formData.name" />
                </UFormGroup>

                <UFormGroup label="Email" name="email">
                    <UInput v-model="formData.email" />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <UInput type="password" v-model="formData.password" />
                </UFormGroup>

                <div class="flex gap-2 items-center">
                    <UCheckbox v-model="agree" label="I agree to" />
                    <NuxtLink class="text-primary" to="/register">privacy policy & terms</NuxtLink>
                </div>

                <UButton :disabled="!agree" type="submit" label="Sign Up" color="primary" block />

                <div class="flex gap-2">
                    <span class="text-gray-500">Already have an account?</span>
                    <NuxtLink class="text-primary" to="/login"> Sign in instead </NuxtLink>
                </div>

            </UForm>
        </UCard>
    </div>

</template>