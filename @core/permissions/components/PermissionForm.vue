<script setup lang="ts">
import schema from '../infra/schemas/permission';
const formData = defineModel<{ subject: string, action: '', description: string, active: boolean }>({ required: true });
const emits = defineEmits(['cancel', 'save'])
</script>
<template>
    <UForm :state="formData" :schema class="space-y-4" @submit="$emit('save')">
        <UFormGroup label="Subject" name="subject">
            <UInput v-model="formData.subject"></UInput>
        </UFormGroup>
        <UFormGroup label="Action" name="action">
            <UInput v-model="formData.action"></UInput>
        </UFormGroup>
        <UFormGroup label="Description" name="description">
            <UInput v-model="formData.description"></UInput>
        </UFormGroup>

        <UCheckbox v-model="formData.active" name="active" label="Active" />
        <div class="flex gap-2">
            <UButton label="Save" type="submit" />
            <UButton label="Cancel" type="button" color="gray" @click="$emit('cancel')" />
        </div>
    </UForm>
</template>