import { AddressCreation } from "./AddressCreation";
import type { AnimalCreation } from "./AnimalCreation";

export class ListingCreation {

    type = "" as string;
    animals = [] as AnimalCreation[];
    files = [] as string[];
    address = new AddressCreation() as AddressCreation;

}