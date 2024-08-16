<script setup lang="ts">
// import { AppMobileMenu } from '#components';
const { uno } = useAppConfig()
// const slideover = useSlideover()
// function openSlideover() {
//     console.log('teste')
//     slideover.open(AppMobileMenu, {
//         onClose: slideover.close
//     })
// }
</script>
<template>
    <header
        class="w-full max-h-14 min-h-14 flex bg-primary-600 dark:bg-transparent dark:border-b-gray-500 dark:border-b justify-between items-center text-white px-2">
        <NuxtLink to="/" class="flex items-center gap-2 dark:text-primary">
            <img src="@/assets/logo.png" alt="Logo" class="h-10 w-10 mr-4 ml-2 dark:bg-primary-600 dark:rounded-full" />
            <h1>{{ uno.title }}</h1>
        </NuxtLink>
        <div class="flex items-center justify-end gap-1">
            <AppToggleDarkMode v-if="uno.toggleDarkMode" />
            <AppColorPicker v-if="uno.colorPicker" />
            <!-- TODO implement toolbar actions -->
            <!-- <template v-for="component in appConfig.uno.toolbarActions">
                <component :is="component" />
            </template> -->
            <UserMenu />
             <!-- TODO implement mobileMenu -->
             <!-- <UButton class="" variant="ghost" square
                :ui="{ rounded: 'rounded-full', color: { white: { ghost: 'hover:bg-primary-700 text-white' } } }"
                color="white" icon="i-heroicons-ellipsis-horizontal-circle" @click="openSlideover">
            </UButton> -->
        </div>
    </header>
</template>