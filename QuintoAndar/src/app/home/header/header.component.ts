import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Residence } from 'src/app/entities/residence';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() allStates!: string[];
  @Output() changeState = new EventEmitter();

  selectStatesHeader!: HTMLSelectElement;
  selectStatesContent5!: HTMLSelectElement;

  selectToHireOrBuyPrices!: HTMLElement;
  labelToHireOrBuyPrices!: HTMLElement;

  iconSelectedToHireElement!: HTMLElement;
  iconSelectedToBuyElement!: HTMLElement;

  maxValuesToSearch = [1000, 2000, 3000, 4000, 5000];
  
  constructor() { }

  ngOnInit(): void {
    this.selectStatesHeader = (document.getElementById("select-states-header") as HTMLSelectElement);
    this.selectStatesContent5 = (document.getElementById("select-states-content-5") as HTMLSelectElement);

    this.selectToHireOrBuyPrices = (document.getElementById("toHireOrBuyPrices") as HTMLElement);
    this.labelToHireOrBuyPrices = (document.getElementById("label-to-hire-or-buy") as HTMLElement);

    this.iconSelectedToHireElement = (document.getElementById("to-hire") as HTMLElement);
    this.iconSelectedToBuyElement = (document.getElementById("to-buy") as HTMLElement);
  }

  btnToHire() {

    this.selectToHireOrBuyPrices.innerHTML =
      `<option value="" selected disabled hidden>Escolha o valor</option>
    <option>Aluguel ${this.maxValuesToSearch[0]}</option>
    <option>Aluguel ${this.maxValuesToSearch[1]}</option>
    <option>Aluguel ${this.maxValuesToSearch[2]}</option>
    <option>Aluguel ${this.maxValuesToSearch[3]}</option>
    <option>Aluguel ${this.maxValuesToSearch[4]}</option>`;

    this.labelToHireOrBuyPrices.innerText = "Aluguel até";

    if (!this.iconSelectedToHireElement.classList.contains('selected-mode')) {
      this.iconSelectedToBuyElement.classList.remove('selected-mode');
      this.iconSelectedToHireElement.classList.add('selected-mode');
    }
  }

  btnToBuy() {

    this.selectToHireOrBuyPrices.innerHTML =
      `<option value="" selected disabled hidden>Escolha o valor</option>
    <option>Imóvel ${this.maxValuesToSearch[0]}</option>
    <option>Imóvel ${this.maxValuesToSearch[1]}</option>
    <option>Imóvel ${this.maxValuesToSearch[2]}</option>
    <option>Imóvel ${this.maxValuesToSearch[3]}</option>
    <option>Imóvel ${this.maxValuesToSearch[4]}</option>`;

    this.labelToHireOrBuyPrices.innerText = "Imóvel até";

    if (!this.iconSelectedToBuyElement.classList.contains('selected-mode')) {
      this.iconSelectedToHireElement.classList.remove('selected-mode');
      this.iconSelectedToBuyElement.classList.add('selected-mode');
    }
  }

  public choiceState() {

    this.selectStatesContent5.value = this.selectStatesHeader.value;

    this.changeState.emit(this.selectStatesHeader.value);

    //inserir os bairros possíveis por meio do resultado de uma service
  }
}
