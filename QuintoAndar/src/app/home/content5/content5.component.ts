import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { Residence } from 'src/app/entities/residence';
import { ResidenceService } from 'src/app/services/residence.service';

@Component({
  selector: 'app-content5',
  templateUrl: './content5.component.html',
  styleUrls: ['./content5.component.sass']
})
export class Content5Component implements OnInit {

  slides!: HTMLElement;

  posSlides: number = 0;
  distanceSlideMov: number = 25;

  allStates = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre", "Campinas", "Canoas", "Guarulhos",
    "Jundiaí", "Nova Lima", "Novo Hamburgo", "Niterói", "Osasco", "Santo André", "São Bernardo do Campo",
    "São Caetano do Sul", "Barueri", "São Leopoldo", "Contagem", "Taboão da Serra", "Diadema", "Várzea Paulista",
    "Santana de Parnaíba"];

  listOfResidence!: Residence[];

  selectStatesHeader!: HTMLSelectElement;
  selectStatesContent5!: HTMLSelectElement;

  constructor(private residenceService: ResidenceService) { }

  ngOnInit(): void {

    this.slides = (document.getElementById("slides-content-5") as HTMLElement);

    this.selectStatesHeader = (document.getElementById("select-states-header") as HTMLSelectElement);
    this.selectStatesContent5 = (document.getElementById("select-states-content-5") as HTMLSelectElement);

    this.residenceService.getAll().subscribe(
      residences => this.listOfResidence = residences);
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

    //USANDO O getAll() ao invés de usar o getByState() porque no back-end o getByState() não está feito
    // this.residenceService.getAll().subscribe(
    //   residences => this.listOfResidence = residences);

    
    this.residenceService.getByState(this.selectStatesContent5.value).subscribe(
      residences => this.listOfResidence = residences);
  }
}
