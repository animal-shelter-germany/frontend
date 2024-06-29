import type { Animal } from "./animal/Animal";
import type { Listing } from "./listing/Listing";

export class AdoptionCreation {

    listing: Listing
    animals: Animal[] = [];
    message?: string;
    zipCode?: string;
    city?: string;

    constructor(listing: Listing) {
        this.listing = listing;
    }

}