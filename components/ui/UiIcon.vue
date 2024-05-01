<template>
    <span class="material-symbols-outlined"><slot></slot></span>
</template>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24;
  font-size: 1.25rem;
}
.styled {
  background-color: var(--primary-color);
  color: white;
  padding: 0.25rem;
  border-radius: 100rem;
}
</style>
