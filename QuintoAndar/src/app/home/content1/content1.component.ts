import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.sass']
})
export class Content1Component implements OnInit {

  slides!: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    this.slides = (document.getElementById("slides") as HTMLElement);
  }

  public goNavLeft (){
    this.slides.style.transition = "transform 1s";
    this.slides.style.transform = "translateX(0)";
  }

  public goNavRight(){
    
    this.slides.style.transition = "transform 1s";
    this.slides.style.transform = "translateX(-100%)";
  }
}
