export class Residence {

    constructor(name:string, type: string, price:string, address:string, squareMeters:number, rooms:number){
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
    price!: string;
    address!: string;
    squareMeters!: number;
    rooms!: number;
}
