export interface Comparator {
    
    getKey(): string;

}

export class ToggleList<T extends Comparator> {

    list?: T[]

    constructor(list?: T[]) {
        this.list = list;
    }

    toggle(i?: T) {
        if(this.list && i) {
            let index = this.list.findIndex(item => item.getKey() === i.getKey());
            if(index > -1) {
                this.list.splice(index, 1);
                return;
            }
            this.list.push(i);
        }
    }

    contains(i?: T): T | undefined {
        if(this.list && i) {
            return this.list.find(item => item.getKey() === i.getKey());
        }
        return undefined;
    }

    get() {
        return this.list;
    }

}