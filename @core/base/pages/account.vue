<template>
    <Page :nav-items="items">
        <NuxtPage />
    </Page>
</template>
<script setup>
const items = [{
    label: 'General',
    icon: 'i-heroicons-user',
    to: '/account/',
    exact: true
}, {
    label: 'Security',
    to: '/account/security',
    icon: 'i-heroicons-lock-closed',
}, {
    label: 'Notifications',
    icon: 'i-heroicons-bell-alert',
    to: '/account/notifications',
}]
</script>