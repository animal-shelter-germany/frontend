<template>
    <div class="tile content">
        <UiInput label="Nachricht">
            <textarea name="" id="" cols="30" rows="10" v-model="adoption.message"></textarea>
        </UiInput>
        <div class="col-2">
            <UiInput label="Postleitzahl">
                <input type="text" v-model="adoption.zipCode">
            </UiInput>
            <UiInput label="Ort">
                <input type="text" v-model="adoption.city">
            </UiInput>
        </div>
    </div>
</template>

<script setup lang="ts">
const adoption = useAdoptionCreationStore().getAdoption();
</script>

<style scoped>

</style>