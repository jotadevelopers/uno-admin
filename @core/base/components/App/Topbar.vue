<script setup lang="ts">
const { uno } = useAppConfig()
</script>
<template>
    <header
        class="w-full max-h-14 min-h-14 flex bg-primary-600 dark:bg-transparent dark:border-b-gray-500 dark:border-b justify-between items-center text-white px-2">
        <div class="flex items-center dark:text-primary">
            <NuxtLink to="/">
                <h1>{{ uno.title }}</h1>
            </NuxtLink>
        </div>
        <div class="flex items-center justify-end gap-1">
            <AppToggleDarkMode v-if="uno.toggleDarkMode" />
            <AppColorPicker v-if="uno.colorPicker" />
            <!-- TODO implement toolbar actions -->
            <!-- <template v-for="component in appConfig.uno.toolbarActions">
                <component :is="component" />
            </template> -->
            <UserMenu />
        </div>
    </header>
</template>