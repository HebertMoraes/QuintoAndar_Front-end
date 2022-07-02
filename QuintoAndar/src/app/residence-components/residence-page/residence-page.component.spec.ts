import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencePageComponent } from './residence-page.component';

describe('ResidencePageComponent', () => {
  let component: ResidencePageComponent;
  let fixture: ComponentFixture<ResidencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidencePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
