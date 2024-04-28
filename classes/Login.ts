export class Login {

    email = undefined as string | undefined;
    password = undefined as string | undefined;

    constructor(email?: string, password?: string) {
        this.email = email;
        this.password = password;
    }

}