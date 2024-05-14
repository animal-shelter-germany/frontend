import { Account } from "./Account";

export class Chat {

    user = undefined as Account | undefined

    constructor(user?: Account) {
        this.user = user;
    }

}