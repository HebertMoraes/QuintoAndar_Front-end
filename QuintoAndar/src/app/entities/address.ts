export class Address {

    constructor(state: string, street: string){
        this.state = state;
        this.street = street;
    }

    state!: string;
    street!: string;
}
