<script setup lang="ts">
const { uno } = useAppConfig();
const items = uno.sidebarMenuItems?.sort((a, b) => a.order - b.order);
</script>

<template>
  <aside class="max-h-full flex flex-row overflow-y-auto border-r dark:border-gray-600 text-gray-400">
    <ul class="w-[72px] flex flex-col gap-y-2 justify-start items-center py-2 h-full">
      <li v-for="(link, key) in items" :key>
        <ULink :to="link.to" active-class="text-primary"
          class="w-full flex flex-col hover:text-white dark:hover:text-white text-lg p-1 rounded-md items-center justify-center">
          <UAvatar v-if="link.img" :src="link.img" class="w-12 h-12 " alt="Avatar" size="xs" />
          <UIcon v-else :name="link.icon!" class="w-6 h-6"></UIcon>
          <p class="text-xs font-medium mt-1 text-center text-ellipsis overflow-hidden w-16">{{ link.label }}</p>
        </ULink>
      </li>
    </ul>
  </aside>
</template>
<style scoped>
aside {
  background-color: #18191B;
}
</style>