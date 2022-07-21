import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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

  posSlides: number = 0;
  distanceSlideMov: number = 25;

  selectStatesHeader!: HTMLSelectElement;

  @ViewChild('btnToHireContent5') btnFilterToHire!: ElementRef;
  @ViewChild('btnToBuyContent5') btnFilterToBuy!: ElementRef;
  @ViewChild('selectStatesContent5') selectStatesContent5!: ElementRef;
  @ViewChild('slidesContent5') slides!: ElementRef

  listResidenceLenght!: number;

  constructor() { }

  ngOnInit(): void {

    this.selectStatesHeader = (document.getElementById("select-states-header") as HTMLSelectElement);

    if (this.listOfResidence === undefined  || this.listOfResidence === null) {
      this.listResidenceLenght = 0;

    } else {
      this.listResidenceLenght = this.listOfResidence.length;
    }
  }

  public btnToHire() {

    if (!this.btnFilterToHire.nativeElement.classList.contains('selected')) {
      this.btnFilterToBuy.nativeElement.classList.remove('selected');
      this.btnFilterToHire.nativeElement.classList.add('selected');
    }
    this.updateListResidence.emit(this.selectStatesContent5.nativeElement.value);
  }

  public btnToBuy() {

    if (!this.btnFilterToBuy.nativeElement.classList.contains('selected')) {
      this.btnFilterToHire.nativeElement.classList.remove('selected');
      this.btnFilterToBuy.nativeElement.classList.add('selected');
    }
    this.updateListResidence.emit(this.selectStatesContent5.nativeElement.value);
  }

  public goNavLeft() {

    if (this.posSlides < 0) {
      this.posSlides += this.distanceSlideMov;
      this.slides.nativeElement.style.transform = `translateX(${this.posSlides}%)`;
    }
  }

  public goNavRight() {

    if (this.posSlides > -140) {
      this.posSlides -= this.distanceSlideMov;
      this.slides.nativeElement.style.transform = `translateX(${this.posSlides}%)`;
    }
  }

  public choiceState() {

    this.selectStatesHeader.value = this.selectStatesContent5.nativeElement.value;

    this.updateListResidence.emit(this.selectStatesContent5.nativeElement.value);
  }
}
