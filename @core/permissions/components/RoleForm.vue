<script setup lang="ts">
import schema from '../infra/schemas/role';
const formData = defineModel<{ name: string, description: string, active: boolean }>({ required: true });
const emits = defineEmits(['cancel', 'save'])
</script>
<template>
    <UForm :state="formData" :schema class="space-y-4" @submit="$emit('save')">
        <UFormGroup label="Name" name="name">
            <UInput v-model="formData.name"></UInput>
        </UFormGroup>
        <UFormGroup label="Description" name="description">
            <UInput v-model="formData.description"></UInput>
        </UFormGroup>

        <UCheckbox v-model="formData.active" name="active" label="Active" />
        <div class="flex gap-2">
            <UButton type="submit" label="Save" />
            <UButton label="Cancel" color="gray" @click="$emit('cancel')" />
        </div>
    </UForm>
</template>