import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Residence } from 'src/app/entities/residence';

@Component({
  selector: 'app-card-residence',
  templateUrl: './card-residence.component.html',
  styleUrls: ['./card-residence.component.sass']
})
export class CardResidenceComponent implements OnInit {

  @Input() residence!: Residence;

  @ViewChild('slideImgsResidence') slides!: ElementRef;

  posSlides: number = 0;
  distanceSlideMov: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

  public goNavLeft() {

    this.slides.nativeElement.style.transition = "transform 0.5s";
    if (this.posSlides < 0) {
      this.posSlides += this.distanceSlideMov;
      this.slides.nativeElement.style.transform = `translateX(${this.posSlides}%)`;
    }
  }

  public goNavRight() {

    this.slides.nativeElement.style.transition = "transform 0.5s";
    if (this.posSlides > -700) {
      this.posSlides -= this.distanceSlideMov;
      this.slides.nativeElement.style.transform = `translateX(${this.posSlides}%)`;
    }
  }
}
