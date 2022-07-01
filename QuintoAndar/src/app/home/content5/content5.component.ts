import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter, map } from 'rxjs';
import { Residence } from 'src/app/entities/residence';
import { ResidenceService } from 'src/app/services/residence.service';

@Component({
  selector: 'app-content5',
  templateUrl: './content5.component.html',
  styleUrls: ['./content5.component.sass']
})
export class Content5Component implements OnInit {

  @Input() allStates!: string[];
  @Input() listOfResidence!: Residence[];
  @Output() updateListResidence = new EventEmitter();

  slides!: HTMLElement;

  posSlides: number = 0;
  distanceSlideMov: number = 25;
  
  selectStatesHeader!: HTMLSelectElement;
  selectStatesContent5!: HTMLSelectElement;

  constructor() { }

  ngOnInit(): void {

    this.slides = (document.getElementById("slides-content-5") as HTMLElement);

    this.selectStatesHeader = (document.getElementById("select-states-header") as HTMLSelectElement);
    this.selectStatesContent5 = (document.getElementById("select-states-content-5") as HTMLSelectElement);
  }

  public btnToHire() {
    //
  }

  public btnToBuy() {
    //
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

  public choiceState() {
    
    this.selectStatesHeader.value = this.selectStatesContent5.value;

    this.updateListResidence.emit(this.selectStatesContent5.value);
  }
}
