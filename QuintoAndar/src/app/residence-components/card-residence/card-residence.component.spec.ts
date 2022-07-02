import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResidenceComponent } from './card-residence.component';

describe('CardResidenceComponent', () => {
  let component: CardResidenceComponent;
  let fixture: ComponentFixture<CardResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
