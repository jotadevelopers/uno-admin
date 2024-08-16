<template>
    <div class="min-h-screen flex flex-col">
        <AppTopbar />
        <div class="w-full flex-1 flex flex-row overflow-hidden">
            <AppSidebar class="hidden md:block" />
            <main class="h-full flex flex-col flex-1 w-full overflow-x-hidden">
                <NuxtPage />
            </main>
        </div>
    </div>
    <USlideovers />
    <UNotifications />
</template>
<script setup lang="ts">
const { uno } = useAppConfig()
useHead({ title: uno.title });
</script>
<style>
:root {
    --header-height: 48px
}
</style>