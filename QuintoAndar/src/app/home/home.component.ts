import { Component, OnInit, ViewChild } from '@angular/core';
import { Residence } from '../entities/residence';
import { ResidenceService } from '../services/residence.service';
import { Content5Component } from './content5/content5.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  listOfResidence!: Residence[];

  allStates = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre", "Campinas", "Canoas", "Guarulhos",
    "Jundiaí", "Nova Lima", "Novo Hamburgo", "Niterói", "Osasco", "Santo André", "São Bernardo do Campo",
    "São Caetano do Sul", "Barueri", "São Leopoldo", "Contagem", "Taboão da Serra", "Diadema", "Várzea Paulista",
    "Santana de Parnaíba"];

  selectStatesHeader!: HTMLSelectElement;

  btnSellModeToHire!: HTMLElement;
  btnSellModeToBuy!: HTMLElement;

  constructor(private residenceService: ResidenceService) {

  }

  ngOnInit(): void {
    
    this.residenceService.getAll().subscribe(
      residences => this.listOfResidence = residences);
    
    this.btnSellModeToHire = (document.getElementById("btn-to-hire-content5") as HTMLElement);
    this.btnSellModeToBuy = (document.getElementById("btn-to-buy-content5") as HTMLElement);

    this.selectStatesHeader = (document.getElementById("select-states-header") as HTMLSelectElement);
  }

  public updateListOfResidence(state: string){

    if (this.btnSellModeToHire.classList.contains('selected')) {

      this.residenceService.filterBySellMode(state, "to-hire").subscribe(residences => this.listOfResidence = residences);
    }
    
    if (this.btnSellModeToBuy.classList.contains('selected')) {

      this.residenceService.filterBySellMode(state, "buy").subscribe(residences => this.listOfResidence = residences);
    }
  }
}
