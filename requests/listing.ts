import axios from "axios";
import type { Listing } from "~/classes/listing/Listing";
import type { ListingCreation } from "~/classes/listing/ListingCreation";
import type { ListingUpdate } from "~/classes/listing/ListingUpdate";
import type { Search } from "~/classes/Search";
import { requireToken } from "~/util/auth";

export function getAllListings(onSuccess: (listings: Listing[]) => void, onError: () => void) {
    axios.get<Listing[]>(useRuntimeConfig().public.baseUrl + "/listings")
    .then((response) => {
        onSuccess(response.data);
    })
    .catch(() => {
        onError();
    });
}

export function getLatestListings(count: number, onSuccess: (listings: Listing[]) => void, onError: () => void) {
    axios.get<Listing[]>(useRuntimeConfig().public.baseUrl + "/listings/latest/" + count)
    .then((response) => {
        onSuccess(response.data);
    })
    .catch(() => {
        onError();
    });
}

export function getAllListingsByAccount(onSuccess: (listings: Listing[]) => void, onError: () => void) {
    axios.get<Listing[]>(useRuntimeConfig().public.baseUrl + "/listings/account", {
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

export function getListingsBySearch(search: Search, onSuccess: (listings: Listing[]) => void, onError: () => void) {
    axios.post<Listing[]>(useRuntimeConfig().public.baseUrl + "/listings/search", search)
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

export function deleteListing(listingId: string, onSuccess: () => void, onError: () => void) {
    axios.delete(useRuntimeConfig().public.baseUrl + "/listings/" + listingId, {
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

export function createListing(listing: ListingCreation, onSuccess: () => void, onError: () => void) {
    axios.post(useRuntimeConfig().public.baseUrl + "/listings", listing, {
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

export function updateListing(listingId: string, listing: ListingUpdate, onSuccess: () => void, onError: () => void) {
    axios.put(useRuntimeConfig().public.baseUrl + "/listings/" + listingId, listing, {
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