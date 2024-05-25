import { Account } from "./account/Account";

export class Chat {

    user = undefined as Account | undefined;
    message = undefined as string | undefined;

    constructor(user?: Account, message?: string) {
        this.user = user;
        this.message = message;
    }

}