<script setup lang="ts">
definePageMeta({
    layout: 'blank',
})
const links = [
    { label: 'Home', to: '/' },
    { label: 'Documents', to: '/docs' }
]
</script>
<template>
    <header
        class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]">
            <div class="lg:flex-1 flex items-center gap-1.5">
                <ULink to="/" class="flex items-center">
                    <img src="@/assets/logo.png" class="h-6 mr-3 sm:h-9" alt="Uno Admin Logo">
                    <span class="self-center text-xl font-semibold whitespace-nowrap text-teal-500 dark:text-white">Uno
                        Admin</span>
                </ULink>
            </div>
            <ul class="items-center gap-x-8 hidden lg:flex w-auto">
                <ULink active-class="text-teal-500" class="font-medium" exact v-for="(link, idx) in links" :key="idx"
                    :to="link.to">{{
                        link.label
                    }}</ULink>
            </ul>
            <div class="flex items-center justify-end lg:flex-1 gap-1.5"></div>
        </div>

    </header>
    <main class="min-h-[calc(100vh-var(--header-height))]">
        <NuxtPage />
    </main>

</template>
<style>
:root {
    /* root element */
    --header-height: 65px;
}

header {
    height: var(--header-height);
}
</style>