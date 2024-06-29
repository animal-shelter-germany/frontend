import type { Animal } from "./animal/Animal";

export class Adoption {

    id?: string;
    status?: string;
    animals?: Animal[];
    requestedAt?: Date;
}