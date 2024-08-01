<script setup lang="ts">
const route = useRoute();
const columns = [
  { key: 'subject', label: 'Subject' },
  { key: 'action', label: 'Action' },
  { key: 'description', label: 'Description' }
];

const { data: items } = await useFetch('/api/security/permission')
const { data: role } = await useFetch<any>(`/api/security/role/${route.params.role}`)
//@ts-ignore
const selected = ref(role.value!.abilities)
const page = ref(1)
const pageCount = 20
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

watch(selected, (value, old) => {
  //@ts-ignore
  role.value.abilities = value;
})
const loading = ref(false)
const save = async () => {
  try {
    loading.value = true;
    await $fetch('/api/security/role/update', { method: 'post', body: role.value });
    loading.value = false;
    useToast().add({ description: 'Permissions have been updated' })
    refreshNuxtData();
  } catch (error: any) {
    loading.value = false;
    useToast().add({ description: error.data.message, color: 'red' })
  }
}
</script>
<template>
  <div class="space-y-4">
    <h1 class="text-slate-800">Admin Permissions </h1>
    <div class="flex items-center gap-2">
      <UButton label="Save Changes" @click="save" />
      <UInput v-model="q" placeholder="Filter permissions..." />
    </div>
    <UTable v-model="selected" :columns="columns" :rows>
    </UTable>
    <UPagination v-model="page" :page-count="pageCount" :total="items?.length!" />
  </div>
</template>