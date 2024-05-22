<template>
    <ScrollComponent>
        <h1>Bearbeiten</h1>
        <div v-if="listing" class="content">
            <Section heading="Allgemein">
                <div class="content">
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
                                <option value="CONVEYED">Teils vermittelt</option>
                            </select>
                        </UiInput>
                    </div>
                    <div class="center-center">
                        <UiButton icon="save" reverse>Speichern</UiButton>
                    </div>
                </div>
            </Section>
            <Section heading="Tiere">
                <div class="col-2">
                    <div class="content" v-for="animal in listing.animals">
                        <div class="tile content">
                            <UiInput label="Name">
                                <input type="text" v-model="animal.name">
                            </UiInput>
                            <div class="col-3" v-if="animal.birthday">
                                <UiInput label="Geburtsjahr">
                                    <input type="number" v-model="animal.birthday.year">
                                </UiInput>
                                <UiInput label="Geburtsmonat">
                                    <input type="number" v-model="animal.birthday.month">
                                </UiInput>
                                <UiInput label="Geburtstag">
                                    <input type="number" v-model="animal.birthday.day">
                                </UiInput>
                            </div>
                            <UiCheckbox label="Sterilisiert/Kastriert" :checked="true"></UiCheckbox>
                            <UiInput label="Geschlecht">
                                <UiRadio :code="key" :label="value" :active="animal.sex" v-for="[key, value] in sexes" @select="(sex: string | undefined) => animal.sex = sex"></UiRadio>
                            </UiInput>
                        </div>
                        <div class="center-center">
                            <UiButton icon="save" reverse>Speichern</UiButton>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
        <LoadingComponent v-if="!listing"></LoadingComponent>
    </ScrollComponent>
</template>

<script setup lang="ts">
import { Listing } from '~/classes/Listing';
import { getListingById } from '~/requests/listing';
import { animalTypes } from '~/util/animal';
import { sexes } from '~/util/animal/sex';

const listing: Ref<Listing | undefined> = ref(undefined);

onMounted(() => {
    const id = useRoute().params.id as string;
    getListingById(id, (_listing: Listing) => {
        listing.value = _listing;
    }, () => {});
});
</script>