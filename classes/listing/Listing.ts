import type { Address } from "../address/Address";
import type { Animal } from "../animal/Animal";

export class Listing {

    id = undefined as string | undefined;
    type = undefined as string | undefined;
    status = undefined as string | undefined;
    animals = undefined as Animal[] | undefined;
    address = undefined as Address | undefined;
    files = undefined as number[] | undefined;

}