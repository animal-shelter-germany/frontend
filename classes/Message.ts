import type { Account } from "./Account";

export class Message {

    sender = undefined as Account | undefined;
    text = undefined as string | undefined;
    sentAt = undefined as Date | undefined;

    constructor(sender?: Account, text?: string, sentAt?: Date) {
        this.sender = sender;
        this.text = text;
        this.sentAt = sentAt;
    }

}