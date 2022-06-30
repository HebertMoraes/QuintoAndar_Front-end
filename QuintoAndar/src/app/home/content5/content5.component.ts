import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/app/entities/residence';

@Component({
  selector: 'app-content5',
  templateUrl: './content5.component.html',
  styleUrls: ['./content5.component.sass']
})
export class Content5Component implements OnInit {

  slides!: HTMLElement;

  posSlides: number = 0;
  distanceSlideMov: number = 25;

  allResidences = {
    "residence1":
    {
      "name": "apartamento-exemplo-1", "type": "apartamento", "price": "R$999,00",
      "address": { "state": "São Paulo", "street": "Rua Exemplo 1" }, "squareMeters": "50m", "rooms": "3 quartos"
    },
    "residence2":
    {
      "name": "apartamento-exemplo-2", "type": "casa", "price": "R$555,00",
      "address": { "state": "Rio de Janeiro", "street": "Rua Exemplo 2" }, "squareMeters": "40m", "rooms": "2 quartos"
    }
  };

  allStates = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre", "Campinas", "Canoas", "Guarulhos",
    "Jundiaí", "Nova Lima", "Novo Hamburgo", "Niterói", "Osasco", "Santo André", "São Bernardo do Campo",
    "São Caetano do Sul", "Barueri", "São Leopoldo", "Contagem", "Taboão da Serra", "Diadema", "Várzea Paulista",
    "Santana de Parnaíba"];

  listOfResidence!: Residence[];

  selectStatesHeader!: HTMLSelectElement;
  selectStatesContent5!: HTMLSelectElement;

  constructor() { }

  ngOnInit(): void {

    this.slides = (document.getElementById("slides-content-5") as HTMLElement);

    this.selectStatesHeader = (document.getElementById("select-states-header") as HTMLSelectElement);
    this.selectStatesContent5 = (document.getElementById("select-states-content-5") as HTMLSelectElement);

    let residence1: Residence = new Residence(this.allResidences.residence1.name, this.allResidences.residence1.type,
      this.allResidences.residence1.price, this.allResidences.residence1.address.state,
      Number(this.allResidences.residence1.squareMeters), Number(this.allResidences.residence1.rooms));

    let residence2: Residence = new Residence(this.allResidences.residence2.name, this.allResidences.residence2.type,
      this.allResidences.residence2.price, this.allResidences.residence2.address.state,
      Number(this.allResidences.residence2.squareMeters), Number(this.allResidences.residence2.rooms));


    //foreach allResidences, se allResidences.address.state == currentSelectedState da HomeComponent, colocar esses iguais nessa 
    //lista abaixo; e inserir uma função que altere essa lista também toda vez que o selectStates for trocado de valor lá 
    //no Header da HomeComponent
    this.listOfResidence = [residence1, residence2, residence1, residence2, residence1, residence2, residence1, residence2, residence1];
  }

  public btnToHire() {

  }

  public btnToBuy() {

  }

  public goNavLeft() {
    this.slides.style.transition = "transform 1s";
    if (this.posSlides < 0) {
      this.posSlides += this.distanceSlideMov;
      this.slides.style.transform = `translateX(${this.posSlides}%)`;
    }
  }

  public goNavRight() {
    this.slides.style.transition = "transform 1s";
    if (this.posSlides > -140) {
      this.posSlides -= this.distanceSlideMov;
      this.slides.style.transform = `translateX(${this.posSlides}%)`;
    }
  }

  public changeListOfResidences() {

    this.selectStatesHeader.value = this.selectStatesContent5.value;

    let residence2: Residence = new Residence(this.allResidences.residence2.name, this.allResidences.residence2.type,
      this.allResidences.residence2.price, this.allResidences.residence2.address.state,
      Number(this.allResidences.residence2.squareMeters), Number(this.allResidences.residence2.rooms));


    
    //AQUI PRECISA FAZER UM SUBSCRIBE EM UMA SERVICE QUE FAZ UM getByState(), 
    //passando como parâmetro o value do selectStatesContent5, o resultado é inserido na listOfResidence

    this.listOfResidence = [residence2, residence2, residence2, residence2];
  }
}
