import axios from "axios";
import type { Animal } from "~/classes/animal/Animal";
import type { AnimalCreation } from "~/classes/animal/AnimalCreation";
import type { AnimalUpdate } from "~/classes/animal/AnimalUpdate";
import { requireToken } from "~/util/auth";

export function createAnimal(listingId: string, animal: AnimalCreation, onSuccess: (animal: Animal) => void, onError: () => void) {
    axios.post<Animal>(useRuntimeConfig().public.baseUrl + '/animals', animal, {
        params: {
            listing: listingId
        },
        headers: {
            Authorization: 'Bearer ' + requireToken()
        }
    })
    .then((response) => {
        onSuccess(response.data);
    })
    .catch(() => {
        onError();
    });
}

export function deleteAnimal(animalId: string, onSuccess: () => void, onError: () => void) {
    axios.delete(useRuntimeConfig().public.baseUrl + '/animals/' + animalId, {
        headers: {
            Authorization: 'Bearer ' + requireToken()
        }
    })
    .then(() => {
        onSuccess();
    })
    .catch(() => {
        onError();
    });
}

export function updateAnimal(animalId: string, animal: AnimalUpdate, onSuccess: () => void, onError: () => void) {
    axios.put(useRuntimeConfig().public.baseUrl + '/animals/' + animalId, animal, {
        headers: {
            Authorization: 'Bearer ' + requireToken()
        }
    })
    .then(() => {
        onSuccess();
    })
    .catch(() => {
        onError();
    });
}