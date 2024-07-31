<template>
    <div class="min-h-screen flex flex-col">
        <div class="h-full min-h-[0px] basis-0 flex-1">
            <div class="flex h-full">
                <div class="w-14 h-full flex flex-col text-gray-400">
                    <div
                        class="flex items-center justify-center max-h-14 min-h-14 bg-primary-600 dark:bg-transparent dark:border-b border-gray-600">
                        <NuxtLink to="/">
                            <img src="@/assets/logo.png" alt="Logo"
                                class="h-8 w-8 dark:bg-primary-600 dark:rounded-full" />
                        </NuxtLink>
                    </div>
                    <AppSidebar />
                </div>
                <div class="w-full flex h-full overflow-hidden">
                    <div class="h-full w-full">
                        <div class="h-full flex flex-col flex-1 w-full overflow-x-hidden">
                            <AppTopbar />
                            <main class="h-full flex flex-col flex-1 w-full overflow-x-hidden">
                                <NuxtPage />
                            </main>
                        </div>
                    </div>

                </div>
            </div>
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