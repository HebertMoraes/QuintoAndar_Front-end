import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  // @ViewChild("toHireOrBuyPrices") selectToHireOrbuy!: Element

  selectToHireOrBuyPrices!: HTMLElement;
  labelToHireOrBuyPrices!: HTMLElement;
  
  iconSelectedToHireElement!: HTMLElement;
  iconSelectedToBuyElement!: HTMLElement;

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit(): void {
    this.selectToHireOrBuyPrices = (this.document.getElementById("toHireOrBuyPrices") as HTMLElement);
    this.labelToHireOrBuyPrices = (this.document.getElementById("label-to-hire-or-buy") as HTMLElement);

    this.iconSelectedToHireElement = (this.document.getElementById("to-hire") as HTMLElement);
    this.iconSelectedToBuyElement = (this.document.getElementById("to-buy") as HTMLElement);
  }

  btnToHire() {
    let maxSearchValue0 = 1000;
    let maxSearchValue1 = 2000;
    let maxSearchValue2 = 3000;
    let maxSearchValue3 = 4000;
    let maxSearchValue4 = 5000;

    this.selectToHireOrBuyPrices.innerHTML =
      `<option value="" selected disabled hidden>Escolha o valor</option>
    <option>Aluguel ${maxSearchValue0}</option>
    <option>Aluguel ${maxSearchValue1}</option>
    <option>Aluguel ${maxSearchValue2}</option>
    <option>Aluguel ${maxSearchValue3}</option>
    <option>Aluguel ${maxSearchValue4}</option>`;

    this.labelToHireOrBuyPrices.innerText = "Aluguel até";

    if (!this.iconSelectedToHireElement.classList.contains('selected-mode')) {
      this.iconSelectedToBuyElement.classList.remove('selected-mode');
      this.iconSelectedToHireElement.classList.add('selected-mode');
    }
  }

  btnToBuy() {
    let maxSearchValue0 = 1000;
    let maxSearchValue1 = 2000;
    let maxSearchValue2 = 3000;
    let maxSearchValue3 = 4000;
    let maxSearchValue4 = 5000;

    this.selectToHireOrBuyPrices.innerHTML =
      `<option value="" selected disabled hidden>Escolha o valor</option>
    <option>Imóvel ${maxSearchValue0}</option>
    <option>Imóvel ${maxSearchValue1}</option>
    <option>Imóvel ${maxSearchValue2}</option>
    <option>Imóvel ${maxSearchValue3}</option>
    <option>Imóvel ${maxSearchValue4}</option>`;

    this.labelToHireOrBuyPrices.innerText = "Imóvel até";

    if (!this.iconSelectedToBuyElement.classList.contains('selected-mode')) {
      this.iconSelectedToHireElement.classList.remove('selected-mode');
      this.iconSelectedToBuyElement.classList.add('selected-mode');
    }
  }
}
