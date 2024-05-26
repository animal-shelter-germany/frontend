export class Account {

    id = undefined as number | undefined;
    email = undefined as string | undefined;
    firstName = undefined as string | undefined;
    lastName = undefined as string | undefined;

    constructor(id?: number, email?: string, firstName?: string, lastName?: string) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

}