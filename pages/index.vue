<template>
    <div class="narrow content b">
        <div class="col-2">
            <img class="hero-img" src="/img-0.jpg" alt="">
            <div class="tile">
                <h2>Wir suchen ein Zuhause!</h2>
                <UiButton class="secondary">Tiere Finden!</UiButton>
            </div>
        </div>
        <div class="tile b content">
            <p class="quote self-center">"Wir möchten Tieren ein Zuhause und eine Familie bieten welche einem Lebenwesen würdig sind."</p>
            <div class="center-center">
                <p>PawParadise, Tiervermittlung</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UiButton from '@/components/ui/UiButton.vue'
</script>

<style scoped>
.hero-img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 1rem;
    overflow: hidden;
}
.quote {
    font-size: 1.25rem;
    font-style: italic;
}
</style>