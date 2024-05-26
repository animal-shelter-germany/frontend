export class ListingUpdate {

    type = undefined as string | undefined;
    status = undefined as string | undefined;

    constructor(type?: string, status?: string) {
        this.type = type;
        this.status = status;
    };

}