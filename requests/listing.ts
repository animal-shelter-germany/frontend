import axios from "axios";
import type { Listing } from "~/classes/Listing";

export function getAllListings(onSuccess: (listings: Listing[]) => void, onError: () => void) {
    axios.get<Listing[]>(useRuntimeConfig().public.baseUrl + "/listings")
    .then((response) => {
        onSuccess(response.data);
    })
    .catch(() => {
        onError();
    });
}

export function getAllListingsByAccount(onSuccess: (listings: Listing[]) => void, onError: () => void) {
    const token = useCookie('animal-token').value;
    if(token == null) {
        return;
    }
    axios.get<Listing[]>(useRuntimeConfig().public.baseUrl + "/listings/account", {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    .then((response) => {
        onSuccess(response.data);
    })
    .catch(() => {
        onError();
    });
}

export function getListingById(listingId: string, onSuccess: (listing: Listing) => void, onError: () => void) {
    axios.get<Listing>(useRuntimeConfig().public.baseUrl + "/listings/" + listingId)
    .then((response) => {
        onSuccess(response.data);
    })
    .catch(() => {
        onError();
    });
}