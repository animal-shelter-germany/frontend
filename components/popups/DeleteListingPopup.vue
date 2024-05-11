<template>
    <PopupTemplate heading="Inserat Löschen?" ref="basePopup">
        <div>
            <div class="center-center gap-0">
                <UiButton>Abbrechen</UiButton>
                <UiButton class="hollow">Löschen</UiButton>
            </div>
        </div>
    </PopupTemplate>
</template>

<script setup lang="ts">
import PopupTemplate from './PopupTemplate.vue';

const basePopup = ref();

function open() {
    basePopup.value.open();
}

function close() {
    basePopup.value.close();
}

defineExpose({
    open, close
});
</script>