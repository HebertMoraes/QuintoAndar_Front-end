import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.sass']
})
export class Content1Component implements OnInit {

  @ViewChild('slidesContent1') slides!: ElementRef
  @ViewChild('iconSelectedContent1') iconSelected!: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  public goNavLeft() {

    this.slides.nativeElement.style.transform = "translateX(0)";
    this.iconSelected.nativeElement.style.transform = "translateX(0)";
  }

  public goNavRight() {

    this.slides.nativeElement.style.transform = "translateX(-100%)";
    this.iconSelected.nativeElement.style.transform = "translateX(101%)";
  }
}
