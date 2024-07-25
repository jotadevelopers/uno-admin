<script setup lang="ts">
definePageMeta({
    layout: 'landing',
    auth: false,
});

const gettingStarted = [
    { label: 'Introduction', to: '/docs/', icon: 'i-heroicons-home' },
    { label: 'Installation', to: '/docs/installation', icon: 'i-heroicons-command-line' },
    { label: 'Folder Structure', to: '/docs/folder-structure', icon: 'i-heroicons-square-3-stack-3d-16-solid' },
    { label: 'App Config', to: '/docs/app-config', icon: 'i-heroicons-cog-6-tooth' },
    { label: 'Create New Feature', to: '/docs/new-feature', icon: 'i-heroicons-squares-plus' },
    { label: 'Authentication', to: '/docs/authentication', icon: 'i-heroicons-lock-closed' },
]

const components = [
    { label: 'Page', to: '/docs/components/page', icon: 'i-heroicons-check-circle' },
]
</script>
<template>
    <section class="flex flex-row gap-4">
        <aside class="w-56 h-screen border-r p-2 space-y-4">
            <p class="text-sm font-medium">Getting Started</p>
            <UVerticalNavigation :links="gettingStarted" />
            <p class="text-sm font-medium">Components</p>
            <UVerticalNavigation :links="components" />
        </aside>
        <main class="p-2 w-full">
            <ContentDoc>
                <template #not-found>
                    <p>Document not found</p>
                </template>
            </ContentDoc>
        </main>
    </section>

</template>