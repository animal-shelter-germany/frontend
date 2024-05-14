export class Account {

    id = undefined as string | undefined;
    email = undefined as string | undefined;
    firstName = undefined as string | undefined;
    lastName = undefined as string | undefined;

    constructor(id?: string, email?: string, firstName?: string, lastName?: string) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

}