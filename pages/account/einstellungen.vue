<template>
    <ScrollComponent>
        <h1>Einstellungen</h1>
        <div class="content">
            <div class="col-2">
                <UiInput label="Vorname">
                    <input type="text">
                </UiInput>
                <UiInput label="Nachname">
                    <input type="text">
                </UiInput>
            </div>
            <div class="col-2">
                <UiInput label="E-Mail">
                    <input type="text">
                </UiInput>
                <UiInput label="Kontotyp">
                    <select name="" id="">
                        <option value="">Privat</option>
                        <option value="">Organisation</option>
                    </select>
                </UiInput>
            </div>
            <div class=center-center>
                <UiButton>Update</UiButton>
            </div>
        </div>
    </ScrollComponent>
</template>


<script setup lang="ts">
import ScrollComponent from '~/components/ScrollComponent.vue';
</script>