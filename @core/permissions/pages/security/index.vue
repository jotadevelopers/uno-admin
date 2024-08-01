<script setup lang="ts">

const { data: items } = await useFetch<[]>('/api/security/role');
const loading = ref(false);
const openCreateModal = ref(false);
const openEditModal = ref(false);
const formData = reactive({ name: '', description: '', active: true });
const page = ref(1)
const pageCount = 20
const rows = computed(() => {
    return items.value?.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

const create = async () => {
    try {
        loading.value = true;
        const role = await $fetch('/api/security/role/create', { method: 'post', body: formData });
        loading.value = false;
        openCreateModal.value = false;
        refreshNuxtData();
    } catch (error: any) {
        loading.value = false;
        useToast().add({ description: error.data, color: 'red' })
    }
}

const edit = async () => {
    try {
        loading.value = true;
        const role = await $fetch('/api/security/role/update', { method: 'post', body: formData });
        loading.value = false;
        openEditModal.value = false;
        refreshNuxtData();
    } catch (error: any) {
        loading.value = false;
        useToast().add({ description: error.data.message, color: 'red' })
    }
}

const cloneRole = async (data: any) => {
    try {
        if (confirm('Do you want to clone this role?')) {
            loading.value = true;
            delete data.id;
            const role = await $fetch('/api/security/role/create', { method: 'post', body: data });
            loading.value = false;
            openEditModal.value = false;
            refreshNuxtData();
        }

    } catch (error: any) {
        loading.value = false;
        useToast().add({ description: error.data.message, color: 'red' })
    }
}

const deleteRole = async (id: number) => {
    try {
        if (confirm('Do you want to delete this role?')) {
            loading.value = true;
            const role = await $fetch('/api/security/role/delete', { method: 'delete', body: { id } });
            loading.value = false;
            openEditModal.value = false;
            refreshNuxtData();
        }
    } catch (error: any) {
        loading.value = false;
        useToast().add({ description: error.data.message, color: 'red' })
    }
}

</script>
<template>
    <div class="space-y-4">
        <UButton @click="openCreateModal = true">Add Role</UButton>
        <UTable :columns="[
            { key: 'name', label: 'Name' },
            { key: 'description', label: 'Description' },
            { key: 'active', label: 'Active' },
            { key: 'actions', label: 'Actions', class: 'w-20' },
        ]" :rows>
            <template #actions-data="{ row }">
                <div class="flex justify-around items-center">
                    <UButton title="edit" @click="() => {
                        openEditModal = true;
                        Object.assign(formData, row);
                    }" color="gray" variant="ghost" icon="i-heroicons-pencil-square" />
                    <UButton :to="`/security/permissions/${row.id}/grant`" title="grant" color="gray" variant="ghost"
                        icon="i-heroicons-squares-plus" />
                    <UButton @click="cloneRole(row)" title="clone" color="gray" variant="ghost"
                        icon="i-heroicons-square-2-stack" />
                    <UButton @click="deleteRole(row.id)" title="delete" color="red" variant="ghost"
                        icon="i-heroicons-archive-box-x-mark" />
                </div>
            </template>
            <template #active-data="{ row }">
                <UCheckbox v-model="row.active" :disabled="true" />
            </template>
        </UTable>
        <UPagination v-model="page" :page-count="pageCount" :total="items?.length!" />
    </div>
    <UModal v-model="openCreateModal">
        <UCard>
            <template #header>Create Role</template>
            <div>
                <RoleForm v-model="formData" @save="create" @cancel="openCreateModal = false" />
            </div>
        </UCard>
    </UModal>
    <UModal v-model="openEditModal">
        <UCard>
            <template #header>Edit Role</template>
            <div>
                <RoleForm v-model="formData" @save="edit" @cancel="openEditModal = false" />
            </div>
        </UCard>
    </UModal>
</template>