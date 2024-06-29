<template>
    <ScrollComponent>
        <div class="space-between-center">
            <h1>Vermittlungen</h1>
            <UiTabs :tabs="getTabs()"></UiTabs>
        </div>
        <div class="adoption-container">
            <div class="tile-m content-m" v-for="adoption in adoptions" @click="() => useRouter().push('/account/vermittlungen/' + adoption.id)">
                <p>{{ dayjs(adoption.requestedAt).format("DD.MM.YYYY HH:mm") + "Uhr" }}</p>
                <AnimalStatusComponent :status="adoption.status"></AnimalStatusComponent>
            </div>
        </div>
    </ScrollComponent>
</template>


<script setup lang="ts">
import type { Adoption } from '~/classes/Adoption';
import ScrollComponent from '~/components/ScrollComponent.vue';
import { getAdoptions } from '~/requests/adoption';
import UiTabs from '~/components/ui/UiTabs.vue';
import dayjs from 'dayjs';
import AnimalStatusComponent from '~/components/AnimalStatusComponent.vue';

const adoptions: Ref<Adoption[] | undefined> = ref(undefined);

onMounted(() => {
    getAdoptions((_adoptions: Adoption[]) => {
        adoptions.value = _adoptions;
    }, () => {});
});

function getTabs() {
    let tabs = new Map<Number, String>();
    tabs.set(0, "Meine Anfragen");
    tabs.set(1, "Erhaltene Anfragen");
    return tabs;
}
</script>

<style scoped>
.adoption-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}
</style>