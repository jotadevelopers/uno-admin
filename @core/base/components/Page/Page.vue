<script setup lang="ts">
import type { HorizontalNavigationLink } from '#ui/types'
const props = defineProps<{
    title?: string;
    navItems?: HorizontalNavigationLink[] | HorizontalNavigationLink[][]
}>();
const leftOpen = ref(true);
</script>
<template>
    <div class="h-[calc(calc(100vh-56px))] overflow-hidden">
        <div v-if="$slots.left || props.title" class="flex gap-2 items-center border-b p-2">
            <UButton v-if="$slots.left" @click="() => leftOpen = !leftOpen" icon="i-heroicons-bars-3-16-solid" size="xs"
                variant="link" color="gray">
            </UButton>
            <h1 class="font-medium text-xl ">{{ props.title }}</h1>
        </div>
        <div v-if="props.navItems?.length"
            class="w-full h-12 flex flex-row gap-2 border-b dark:border-b-gray-600 overflow-x-auto">
            <UHorizontalNavigation :links="props.navItems" />
        </div>
        <div class="flex flex-col md:flex-row h-full">
            <div v-if="$slots.left" v-show="leftOpen" class="border-r min-h-auto overflow-y-auto">
                <slot name="left" />
            </div>
            <div class="flex-1 overflow-auto h-full pb-28">
                <slot />
            </div>
            <div v-if="$slots.right" class="overflow-y-auto border-l h-auto ">
                <slot name="right" />
            </div>
        </div>
    </div>
    <!-- <div v-if="$slots.left || props.title" class="flex gap-2 items-center border-b p-2">
        <UButton v-if="$slots.left" @click="() => leftOpen = !leftOpen" icon="i-heroicons-bars-3-16-solid" size="xs"
            variant="link" color="gray">
        </UButton>
        <h1 class="font-medium text-3xl ">Title</h1>
    </div>
    <div v-if="props.navItems?.length"
        class="bg-background/75 backdrop-blur w-full h-12 flex flex-row gap-2 border-b dark:border-b-gray-600 z-10">
        <UHorizontalNavigation :links="props.navItems" />
    </div>
    <div class="flex flex-col md:flex-row h-full">
        <div v-if="$slots.left" v-show="leftOpen" class="lg:col-span-2 border-r min-h-auto overflow-y-auto">
            <slot name="left" />
        </div>
        <div class="flex-1 overflow-auto max-h-full bg-gray-500">
            <slot />
        </div>
        <div v-if="$slots.right" class="overflow-y-auto border-l h-auto ">
            <slot name="right" />
        </div>
    </div> -->
</template>