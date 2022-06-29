import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/app/entities/residence';

@Component({
  selector: 'app-content5',
  templateUrl: './content5.component.html',
  styleUrls: ['./content5.component.sass']
})
export class Content5Component implements OnInit {

  slides!: HTMLElement;

  allResidences = {
    "residence1":
    {
      "name": "apartamento-exemplo-1", "type": "apartamento", "price": "R$999,00",
      "address": "endereco exemplo 1", "squareMeters": "50m", "rooms": "3 quartos"
    },
    "residence2":
    {
      "name": "apartamento-exemplo-2", "type": "casa", "price": "R$555,00",
      "address": "endereco exemplo 2", "squareMeters": "40m", "rooms": "2 quartos"
    }
  };

  listOfResidence!: Residence[];

  constructor() { }

  ngOnInit(): void {

    this.slides = (document.getElementById("slides") as HTMLElement);

    let residence1: Residence = new Residence(this.allResidences.residence1.name, this.allResidences.residence1.type,
      this.allResidences.residence1.price, this.allResidences.residence1.address,
      Number(this.allResidences.residence1.squareMeters), Number(this.allResidences.residence1.rooms));

    let residence2: Residence = new Residence(this.allResidences.residence2.name, this.allResidences.residence2.type,
      this.allResidences.residence2.price, this.allResidences.residence2.address,
      Number(this.allResidences.residence2.squareMeters), Number(this.allResidences.residence2.rooms));

    this.listOfResidence = [residence1, residence2, residence1, residence2, residence1, residence2, residence1];
  }

  public btnToHire() {

  }

  public btnToBuy() {

  }

  public goNavLeft (){
    this.slides.style.transition = "transform 1s";
    this.slides.style.transform = "translateX(0)";
  }

  public goNavRight(){
    this.slides.style.transition = "transform 1s";
    this.slides.style.transform = "translateX(-100%)";
  }
}
