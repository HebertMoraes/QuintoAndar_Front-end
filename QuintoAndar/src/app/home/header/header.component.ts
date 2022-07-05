import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Residence } from 'src/app/entities/residence';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() allStates!: string[];
  @Output() updateListResidence = new EventEmitter();

  selectStatesHeader!: HTMLSelectElement;
  selectStatesContent5!: HTMLSelectElement;
  
  @ViewChild('toHireHeader') iconSelectedToHire!: ElementRef;
  @ViewChild('toBuyHeader') iconSelectedToBuy!: ElementRef;
  @ViewChild('toHireOrBuyPrices') selectToHireOrBuyPrices!: ElementRef
  @ViewChild('labelToHireOrBuy') labelToHireOrBuyPrices!: ElementRef

  maxValuesToSearch = [1000, 2000, 3000, 4000, 5000];
  
  constructor() { }

  ngOnInit(): void {
    this.selectStatesHeader = (document.getElementById("select-states-header") as HTMLSelectElement);
    this.selectStatesContent5 = (document.getElementById("select-states-content-5") as HTMLSelectElement);
  }

  btnToHire() {

    this.selectToHireOrBuyPrices.nativeElement.innerHTML =
      `<option value="" selected disabled hidden>Escolha o valor</option>
    <option>Aluguel ${this.maxValuesToSearch[0]}</option>
    <option>Aluguel ${this.maxValuesToSearch[1]}</option>
    <option>Aluguel ${this.maxValuesToSearch[2]}</option>
    <option>Aluguel ${this.maxValuesToSearch[3]}</option>
    <option>Aluguel ${this.maxValuesToSearch[4]}</option>`;

    this.labelToHireOrBuyPrices.nativeElement.innerText = "Aluguel até";

    if (!this.iconSelectedToHire.nativeElement.classList.contains('selected-mode')) {
      this.iconSelectedToBuy.nativeElement.classList.remove('selected-mode');
      this.iconSelectedToHire.nativeElement.classList.add('selected-mode');
    }
  }

  btnToBuy() {

    this.selectToHireOrBuyPrices.nativeElement.innerHTML =
      `<option value="" selected disabled hidden>Escolha o valor</option>
    <option>Imóvel ${this.maxValuesToSearch[0]}</option>
    <option>Imóvel ${this.maxValuesToSearch[1]}</option>
    <option>Imóvel ${this.maxValuesToSearch[2]}</option>
    <option>Imóvel ${this.maxValuesToSearch[3]}</option>
    <option>Imóvel ${this.maxValuesToSearch[4]}</option>`;

    this.labelToHireOrBuyPrices.nativeElement.innerText = "Imóvel até";

    if (!this.iconSelectedToBuy.nativeElement.classList.contains('selected-mode')) {
      this.iconSelectedToHire.nativeElement.classList.remove('selected-mode');
      this.iconSelectedToBuy.nativeElement.classList.add('selected-mode');
    }
  }

  public choiceState() {

    this.selectStatesContent5.value = this.selectStatesHeader.value;

    this.updateListResidence.emit(this.selectStatesHeader.value);
  }
}
