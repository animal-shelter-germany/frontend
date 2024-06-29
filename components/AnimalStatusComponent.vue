<template>
    <div class="status" :class="(status as string).toLowerCase()">
        <p>{{ getLabel(status) }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    status?: string
}>();

function getLabel(status?: string) {
    if(status === 'PENDING') {
        return "Ausstehend";
    }
    if(status === 'ACCEPTED') {
        return "Bestätigt";
    }
    if(status === 'DECLINED') {
        return "Abgelehnt";
    }
    return "N/A";
}
</script>

<style scoped>
.status {
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    width: 7rem;
}
.status * {
    font-weight: 500;
}
.pending {
    background-color: #636363;
}
.pending * {
    color: #ececec;
}
.accepted {
    background-color: #0cb929;
}
.accepted * {
    color: #dbffe4;
}
.declined {
    background-color: #cc0909;
}
.declined * {
    color: #ffd7d7;
}
</style>