<script setup lang="ts">
const links = [
    { label: 'Installation', to: '/docs', exact: true },
    { label: 'App Configurations', to: '/docs/configurations', exact: true },
    { label: 'Create new page', to: '/', exact: true },
    { label: 'Create new module', to: '/', exact: true },
    { label: 'Authentication', badge: 'pro', to: '/', exact: true },
    { label: 'Acess Control', badge: 'pro', to: '/', exact: true },
    { label: 'Docker', badge: 'pro', to: '/', exact: true },
]
</script>
<template>
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
            <div class="lg:col-span-2">
                <aside
                    class="hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4">
                    <UVerticalNavigation :links="links" />
                </aside>
            </div>
            <div class="w-full border-l px-2 min-h-screen">
                <NuxtPage />
            </div>
        </div>

    </div>
</template>