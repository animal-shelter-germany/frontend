import axios from "axios";
import type { Listing } from "~/classes/Listing";
import type { ListingCreation } from "~/classes/ListingCreation";

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

export function createListing(listing: ListingCreation, onSuccess: () => void, onError: () => void) {
    const token = useCookie('animal-token').value;
    if(token == null) {
        return;
    }
    axios.post(useRuntimeConfig().public.baseUrl + "/listings", listing, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    .then(() => {
        onSuccess();
    })
    .catch(() => {
        onError();
    });
}