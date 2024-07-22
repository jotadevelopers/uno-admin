<script setup lang="ts">
import avatar from '~/assets/user-avatar.png';

const { signOut, data } = useAuth();

const items = reactive([
    [{
        label: 'Account',
        icon: 'i-heroicons-user-circle',
        to: '/account/',
        exact: true
    }, {
        label: 'Security',
        icon: 'i-heroicons-lock-closed-16-solid',
        to: '/account/security'
    }], [{
        label: 'Logout',
        icon: 'i-heroicons-arrow-left-on-rectangle',
        click: async () => {
            await signOut({ callbackUrl: '/' })
        }
    }]
]);
</script>

<template>
    <UDropdown v-if="data" :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
        :popper="{ placement: 'bottom-end' }">
        <div class="flex items-center gap-2">
            <h1>{{ data.user.name }}</h1>
            <UAvatar :src="avatar" size="xs" class="mx-2 cursor-pointer" />
        </div>

        <template #item="{ item }">
            <span class="truncate">{{ item.label }}</span>
            <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
        </template>
    </UDropdown>
</template>