<template>
    <div class="scroll-container">
        <div class="scroll-content content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.scroll-container {
    position: relative;
    min-height: 100%;
    width: 100%;
}
.scroll-content {
    position: absolute;
    height: 100%;
    overflow: scroll;
    width: 100%;
    padding: 1rem 1.5rem;
}
</style>