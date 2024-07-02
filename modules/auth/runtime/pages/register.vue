<script setup>
definePageMeta({
    layout: 'blank',
    auth: false
});
const { signIn } = useAuth();
import schema from '../lib/schemas/register';
const loading = ref(false);
const formData = reactive({ name: '', email: '', password: '' });

async function onSubmit(event) {
    try {
        loading.value = true;
        await signIn({ email: 'admin@uno.com', password: 'admin' }, { callbackUrl: '/dashboard' })
        loading.value = false;
    } catch (error) {
        loading.value = false;
        useToast().add({ description: error.message, color: 'red' })
    }
}
const notImplemented = () => {
    useToast().add({ description: 'Not implemented yet.', color: 'orange' })
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
                    <UCheckbox label="I agree to" />
                    <NuxtLink class="text-primary" to="/register">privacy policy & terms</NuxtLink>
                </div>

                <UButton type="submit" label="Sign Up" color="primary" block />

                <div class="flex gap-2">
                    <span class="text-gray-500">Already have an account?</span>
                    <NuxtLink class="text-primary" to="/login"> Sign in instead </NuxtLink>
                </div>

                <UDivider label="OR" />

                <UButton @click="notImplemented" color="gray" label="Sign up with Google" icon="i-simple-icons-github"
                    block />
                <UButton @click="notImplemented" color="gray" label="Sign up with Facebook" icon="i-simple-icons-google"
                    block />
            </UForm>
        </UCard>
    </div>

</template>