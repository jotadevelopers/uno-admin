<script setup lang="ts">
const items = [
    {
        label: 'Roles',
        to: '/security',
        exact: true
    },
    {
        label: 'Permissions',
        to: '/security/permissions',
        exact: true
    }
]
</script>
<template>
    <Page :nav-items="items">
        <PageBody>
            <NuxtPage />
        </PageBody>
    </Page>
</template>