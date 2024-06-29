<template>
    <ScrollComponent>
        <h1>Vermittlung</h1>
        <div class="timeline">
            <div class="status base-shape" :class="{ active: status === 0 }">
                <p>Angefragt</p>
            </div>
            <div class="divider"></div>
            <div class="status base-shape">
                <p>Warten auf Besitzer</p>
            </div>
            <div class="divider"></div>
            <div class="status base-shape">
                <p>Abgeschlossen</p>
            </div>
        </div>
    </ScrollComponent>
</template>


<script setup lang="ts">
import ScrollComponent from '~/components/ScrollComponent.vue';

const status = ref(0);
</script>

<style scoped>
.timeline {
    display: grid;
    grid-template-columns: auto 1fr auto 1fr auto;
    align-items: center;
    gap: 1rem;
    height: 2.5rem;
}
.divider {
    height: 0.25rem;
    background-color: rgb(63, 63, 63);
}
.status {
    display: flex;
    align-items: center;
    background-color: var(--background-color);
    padding: 0 1rem;
}
.status.active {
    background-color: var(--primary-color);
}
.status.active * {
    color: white;
}
</style>