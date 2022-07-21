import { Component, OnInit } from '@angular/core';
import { Residence } from '../entities/residence';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.sass']
})
export class UserAccountComponent implements OnInit {

  slides!: HTMLElement;

  posSlides: number = 0;
  distanceSlideMov: number = 25;

  listOfResidence!: Residence[];

  constructor(private residenceService: ResidenceService) { }

  ngOnInit(): void {
    this.slides = (document.getElementById("slides-user-account") as HTMLElement);

    this.residenceService.getAll().subscribe(
      residences => this.listOfResidence = residences);
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

  public clickOnOptionBottomSheet(choice: string) {
    console.log(choice + " clicou");
  }
}
