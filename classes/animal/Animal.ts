import type { Birthday } from "../Birthday";
import type { Comparator } from "~/util/toggle-list";

export class Animal implements Comparator {

    id = undefined as string | undefined;
    name = undefined as string | undefined;
    sex = undefined as string | undefined;
    steril = undefined as boolean | undefined;
    birthday = undefined as undefined | Birthday;

    getKey(): string {
        return this.id as string;
    }

}