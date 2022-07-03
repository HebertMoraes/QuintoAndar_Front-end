import { Component, Input, OnInit } from '@angular/core';
import { Residence } from 'src/app/entities/residence';

@Component({
  selector: 'app-card-residence',
  templateUrl: './card-residence.component.html',
  styleUrls: ['./card-residence.component.sass']
})
export class CardResidenceComponent implements OnInit {

  @Input() residence!: Residence;

  slides!: HTMLElement;
  posSlides: number = 0;
  distanceSlideMov: number = 100;

  constructor() { }

  ngOnInit(): void {
    this.slides = (document.getElementById("slide-imgs-residence") as HTMLElement);
  }

  public goNavLeft() {

    this.slides.style.transition = "transform 0.5s";
    if (this.posSlides < 0) {
      this.posSlides += this.distanceSlideMov;
      this.slides.style.transform = `translateX(${this.posSlides}%)`;
    }
  }

  public goNavRight() {

    this.slides.style.transition = "transform 0.5s";
    if (this.posSlides > -700) {
      this.posSlides -= this.distanceSlideMov;
      this.slides.style.transform = `translateX(${this.posSlides}%)`;
    }
  }
}
