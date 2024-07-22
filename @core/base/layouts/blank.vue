<template>
    <div class="flex flex-col">
        <slot />
    </div>
    <UNotifications />
</template>
<script setup>
useHead({ title: 'Uno Admin Template' })
</script>