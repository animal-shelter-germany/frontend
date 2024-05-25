import type { Birthday } from "../Birthday";

export class AnimalUpdate {

    id = undefined as string | undefined;
    name = undefined as string | undefined;
    sex = undefined as string | undefined;
    birthday = undefined as Birthday | undefined;
    
    constructor(id?: string, name?: string, sex?: string, birthday?: Birthday) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.birthday = birthday;
    };

}