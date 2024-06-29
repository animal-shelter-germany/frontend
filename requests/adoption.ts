import axios from "axios";
import type { Adoption } from "~/classes/Adoption";
import type { AdoptionCreation } from "~/classes/AdoptionCreation";
import { requireToken } from "~/util/auth";

export function createAdoption(adoption: AdoptionCreation, onSuccess: () => void, onError: () => void) {
    axios.post(useRuntimeConfig().public.baseUrl + '/adoptions', adoption, {
        headers: {
            Authorization: "Bearer " + requireToken()
        }
    })
    .then(() => {
        onSuccess();
    })
    .catch(() => {
        onError();
    });
}

export function getAdoptions(onSuccess: (adoptions: Adoption[]) => void, onError: () => void) {
    axios.get<Adoption[]>(useRuntimeConfig().public.baseUrl + '/adoptions', {
        headers: {
            Authorization: "Bearer " + requireToken()
        }
    })
    .then((response) => {
        onSuccess(response.data);
    })
    .catch();
}