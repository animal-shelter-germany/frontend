<template>
    <div class="tile">
        <div class="left-center">
            <UiRadioCircle :selected="true"></UiRadioCircle>
            <h3>{{ animal.name }}</h3>
        </div>
        <div>
            <p>Irgendwas</p>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import type { Animal } from '~/classes/animal/Animal';

defineProps<{
    animal: Animal
}>();
</script>