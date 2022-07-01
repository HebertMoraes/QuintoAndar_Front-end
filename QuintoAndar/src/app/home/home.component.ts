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

  @ViewChild(Content5Component) content5!: Content5Component;

  listOfResidence!: Residence[];

  allStates = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre", "Campinas", "Canoas", "Guarulhos",
    "Jundiaí", "Nova Lima", "Novo Hamburgo", "Niterói", "Osasco", "Santo André", "São Bernardo do Campo",
    "São Caetano do Sul", "Barueri", "São Leopoldo", "Contagem", "Taboão da Serra", "Diadema", "Várzea Paulista",
    "Santana de Parnaíba"];

  constructor(private residenceService: ResidenceService) {

  }

  ngOnInit(): void {

  }

  public changeListOfResidence(state: string){
    
    this.residenceService.getByState(state).subscribe(
      residences => this.listOfResidence = residences);
  }
}
