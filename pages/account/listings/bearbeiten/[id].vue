<template>
    <ScrollComponent>
        <h1>Bearbeiten</h1>
        <div v-if="listing" class="content">
            <Section heading="Allgemein">
                <div class="col-2 tile">
                    <UiInput label="Tierart">
                        <select name="" id="">
                            <option :value="key" v-for="[key, value] in animalTypes">{{ value }}</option>
                        </select>
                    </UiInput>
                    <UiInput label="Status">
                        <select name="" id="">
                            <option value="ACTIVE">Aktiv</option>
                            <option value="INACTIVE">Inaktiv</option>
                            <option value="CONVEYED">Vermittelt</option>
                        </select>
                    </UiInput>
                </div>
            </Section>
            <div class="center-center">
                <UiButton icon="save" reverse>Speichern</UiButton>
            </div>
        </div>
        <LoadingComponent v-if="!listing"></LoadingComponent>
    </ScrollComponent>
</template>

<script setup lang="ts">
import { Listing } from '~/classes/Listing';
import { getListingById } from '~/requests/listing';
import { animalTypes } from '~/util/animal';

const listing: Ref<Listing | undefined> = ref(undefined);

onMounted(() => {
    const id = useRoute().params.id as string;
    getListingById(id, (_listing: Listing) => {
        listing.value = _listing;
    }, () => {});
});
</script>