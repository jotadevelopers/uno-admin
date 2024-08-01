<script setup lang="ts">
const { data: items } = await useFetch<[]>('/api/security/permission')
const formData = reactive({ subject: '', action: '', description: '', active: true });
const openCreateModal = ref(false);
const openEditModal = ref(false)
const loading = ref(false);
const page = ref(1)
const pageCount = 10
const q = ref('');

const rows = computed(() => {
    if (!q.value) {
        return items.value!
    }

    return items.value!.filter((person) => {
        return Object.values(person).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
        })
    })
})
const create = async () => {
    try {
        loading.value = true;
        const role = await $fetch('/api/security/permission/create', { method: 'post', body: formData });
        loading.value = false;
        openCreateModal.value = false;
        useToast().add({ description: 'Permission has be created.' })
        refreshNuxtData();
    } catch (error: any) {
        loading.value = false;
        useToast().add({ description: error.data.message, color: 'red' })
    }
}

const edit = async () => {
    try {
        loading.value = true;
        await $fetch('/api/security/permission/update', { method: 'post', body: formData });
        loading.value = false;
        openEditModal.value = false;
        refreshNuxtData();
    } catch (error: any) {
        loading.value = false;
        useToast().add({ description: error.data.message, color: 'red' })
    }
}
const deletePermission = async (id: number) => {
    try {
        if (confirm('Do you want to delete this permission?')) {
            loading.value = true;
            const role = await $fetch('/api/security/permission/delete', { method: 'delete', body: { id } });
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
        <div class="flex items-center justify-between">
            <UButton @click="openCreateModal = true">Add Permission</UButton>
            <UInput v-model="q" placeholder="Filter permission..." />
        </div>
        <UTable :columns="[
            { key: 'subject', label: 'Subject' },
            { key: 'action', label: 'Action' },
            { key: 'description', label: 'Description' },
            { key: 'active', label: 'Active' },
            { key: 'actions', label: 'Actions', class: 'w-20' },
        ]" :rows>
            <template #actions-data="{ row }">
                <div class="flex justify-around items-center">
                    <UButton @click="() => {
                        openEditModal = true;
                        Object.assign(formData, row);
                    }" title="edit" color="gray" variant="ghost" icon="i-heroicons-pencil-square" />
                    <UButton @click="deletePermission(row.id)" title="delete" color="red" variant="ghost"
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
            <template #header>Create Permisson</template>
            <div>
                <PermissionForm v-model="formData" @save="create" @cancel="openCreateModal = false" />
            </div>
        </UCard>
    </UModal>
    <UModal v-model="openEditModal">
        <UCard>
            <template #header>Edit Permission</template>
            <UAlert color="orange" variant="subtle" class="mb-4" title="Warning"
                description="By editing the permission, you might break the system permissions functionality. Please ensure you're absolutely certain before proceeding." />
            <div>
                <PermissionForm v-model="formData" @save="edit" @cancel="openEditModal = false" />
            </div>
        </UCard>
    </UModal>
</template>