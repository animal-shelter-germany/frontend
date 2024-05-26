import { AddressCreation } from "../address/AddressCreation";
import type { AnimalCreation } from "../animal/AnimalCreation";

export class ListingCreation {

    type = "" as string;
    animals = [] as AnimalCreation[];
    files = [] as string[];
    address = new AddressCreation() as AddressCreation;

}