<script setup>
definePageMeta({
    layout: 'blank',
    auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: '/dashboard', }
});
const { signIn } = useAuth()
import schema from '../infra/schemas/login';
const loading = ref(false);

const formData = reactive({ email: 'admin@uno.com', password: 'admin' });

async function onSubmit(event) {
    try {
        loading.value = true;
        await signIn({ email: formData.email, password: formData.password }, { callbackUrl: '/dashboard', redirect: true })
        loading.value = false;
    } catch (error) {
        loading.value = false;
        useToast().add({ description: error.data.message, color: 'red' })
    }
}

</script>
<template>
    <div class="min-h-screen flex-row justify-center items-center p-2">
        <UCard class="max-w-xl mx-auto shadow-lg">
            <div class="text-center">
                <img src="@/assets/logo.png" alt="Logo" class="mx-auto h-16 dark:bg-gray-600 dark:rounded-full" />
                <h1 class="font-medium text-xl text-gray-700">Welcome to Uno Admin</h1>
                <p class="text-gray-400">Please sign-in to your account and start the adventure </p>
            </div>
            <UAlert class="mt-4" color="primary" variant="outline" title="Test credentials.">
                <template #description>
                    <p><b>email:</b> admin@uno.com</p>
                    <p><b>password:</b> admin</p>
                </template>
            </UAlert>

            <UForm class="space-y-4 mt-4" :state="formData" :schema @submit="onSubmit">

                <UFormGroup label="Email" name="email">
                    <UInput v-model="formData.email" />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <UInput type="password" v-model="formData.password" />
                </UFormGroup>

                <UButton type="submit" label="Login" color="primary" block />

                <div class="flex gap-2 items-center justify-between">
                    <UCheckbox label="Remember me" />
                    <NuxtLink class="text-primary" to="/forgot-password">Forgot password?</NuxtLink>
                </div>

                <div class="flex gap-2 justify-center">
                    <span class="text-gray-500">New on our platform?</span>
                    <NuxtLink class="text-primary" to="/register">Create an account</NuxtLink>
                </div>
            </UForm>
        </UCard>
    </div>

</template>