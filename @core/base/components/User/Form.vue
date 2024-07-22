<script setup lang="ts">
import schema from '../../infra/schemas/user';
const formData = defineModel<{ name: string, email: string, active: boolean }>({ required: true });
const emits = defineEmits(['cancel', 'save'])
</script>
<template>
    <UForm :state="formData" :schema class="space-y-4" @submit="$emit('save')">
        <UFormGroup label="Name" name="name">
            <UInput v-model="formData.name"></UInput>
        </UFormGroup>
        <UFormGroup label="Email" name="email">
            <UInput v-model="formData.email"></UInput>
        </UFormGroup>

        <UCheckbox v-model="formData.active" name="active" label="Active" />
        <div class="flex gap-2">
            <UButton type="submit" label="Save" />
            <UButton label="Cancel" color="gray" @click="$emit('cancel')" />
        </div>
    </UForm>
</template>