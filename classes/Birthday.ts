export class Birthday {

    year = undefined as number | undefined;
    month = undefined as number | undefined;
    day = undefined as number | undefined;
 
    constructor(year?: number, month?: number, day?: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

}