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
        <Section heading="Zuletzt hinzugefügt" v-if="listings">
            <div class="col-4">
                <ListingComponent v-for="listing in listings" :listing="listing"></ListingComponent>
            </div>
        </Section>
        <Section heading="FAQ">
            <div class="center-center">
                <div class="narrow-b content m">
                    <UiDropdown label="Welche Tiere stehen zur Verfügung?">
                        <p>Momentan kannst du Katzen, Hunde, Kanienchen/Hasen, Fische und auch Meerschweinchen bei uns finden. Wenn dein Liebslingstier hier nicht enthalten ist, kannst du uns gerne kontaktieren.</p>
                    </UiDropdown>
                    <UiDropdown label="Woher stammen die Tiere?">
                        <p>Die Tiere stammen sowohl von Privatanbietern als auch Tierheimen.</p>
                    </UiDropdown>
                    <UiDropdown label="Wie viel Geld kostet ein Tier?">
                        <p>Die Antwort auf diese Frage fällt zu unterschiedlich aus, um hier eine Antwort zu geben. Die Preisgestaltung ist vollständig dem aktuellen Besitzer des Tieres überlassen.</p>
                    </UiDropdown>
                    <UiDropdown label="Wie läuft der Adoptionsprozess ab?">
                        <p>Die Tiere stammen sowohl von Privatanbietern als auch Tierheimen.</p>
                    </UiDropdown>
                    <UiDropdown label="Kann ich nur einen Teil der Tiere eines Inserats adoptiern?">
                        <p>In Absprache mit dem Besitzer der Tiere kannst du vereinbaren, dass nicht alle sondern nur bestimmte Tiere eines Inserates adoptiert werden. Bitte beachte dass dies manchmal aufgrund von Tierschutzbestimmungen nur eingeschränkt möglich ist.</p>
                    </UiDropdown>
                    <UiDropdown label="Kann ich mich für die Abgabe eines Tieres anmelden?">
                        <p>Falls du aus verschiedenen Gründen dein Tier nicht mehr vorsorgen kannst, kannst du dieses hier insierern und ein Zuhause für dieses finden. Du kannst auf unserer Plattform sowohl als Privatperson wie auch als Organisation auftreten.</p>
                    </UiDropdown>
                </div>
            </div>
        </Section>
        <div class="col-2">
            <Section heading="Benötigst du Hilfe?">

            </Section>
            <Section heading="Kontaktiere Uns">
                <div class="tile content">
                    <UiInput label="E-Mail">
                        <input type="text">
                    </UiInput>
                    <UiInput label="Betreff">
                        <input type="text">
                    </UiInput>
                    <UiInput label="Anliegen">
                        <input type="text">
                    </UiInput>
                    <div class="center-center">
                        <UiButton>Senden</UiButton>
                    </div>
                </div>
            </Section>
        </div>
    </div>
</template>

<script setup lang="ts">
import UiButton from '@/components/ui/UiButton.vue'
import type { Listing } from '~/classes/Listing';
import Section from '~/components/Section.vue';
import { getLatestListings } from '~/requests/listing';

const listings: Ref<Listing[] | undefined> = ref(undefined);

onMounted(() => {
    getLatestListings(4, (_listings: Listing[]) => {
        listings.value = _listings;
    }, () => {});
});
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