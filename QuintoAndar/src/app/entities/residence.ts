import { Address } from "./address";

export class Residence {

    constructor(name:string, type: string, price:string, address:Address, squareMeters:number, rooms:number){
        this.name = name;
        this.type = type;
        this.price = price;
        this.address = address;
        this.squareMeters = squareMeters;
        this.rooms = rooms;
    }

    id!: number;
    name!: string;
    type!: string;
    sellMode!: string;
    price!: string;
    address!: Address;
    squareMeters!: number;
    rooms!: number;
}
