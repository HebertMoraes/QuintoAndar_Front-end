import { Component, Input, OnInit } from '@angular/core';
import { Residence } from 'src/app/entities/residence';

@Component({
  selector: 'app-card-residence',
  templateUrl: './card-residence.component.html',
  styleUrls: ['./card-residence.component.sass']
})
export class CardResidenceComponent implements OnInit {

  @Input() residence!: Residence;

  constructor() { }

  ngOnInit(): void {
  }

}
