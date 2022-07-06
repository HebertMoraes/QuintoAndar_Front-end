import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Address } from 'src/app/entities/address';
import { Residence } from 'src/app/entities/residence';

import { CardResidenceComponent } from './card-residence.component';

describe('CardResidenceComponent', () => {
  let component: CardResidenceComponent;
  let fixture: ComponentFixture<CardResidenceComponent>;

  const getByID123Mock = [
    {
      "id": "123",
      "name": "apartamentoooo-exemplo",
      "type": "apartamento",
      "sellMode": "to-hire",
      "price": "R$999,00",
      "address": {
        "state": "São Paulo",
        "street": "Rua Exemplo 1"
      },
      "squareMeters": "50",
      "rooms": "3"
    }
  ];

  const addressMock = new Address(getByID123Mock[0].address.state, getByID123Mock[0].address.street);

  const residenceId123Mock = new Residence(getByID123Mock[0].name, getByID123Mock[0].type, getByID123Mock[0].price,
    addressMock, Number(getByID123Mock[0].squareMeters), Number(getByID123Mock[0].rooms));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardResidenceComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardResidenceComponent);
    component = fixture.componentInstance;
    component.residence = residenceId123Mock;
    fixture.detectChanges();
  });

  it('o carrousel do card não é capaz de se movimentar para a esquerda no começo', () => {

    component.goNavLeft();

    expect(component.posSlides).toEqual(0);
  });

  it('o carrousel do card é capaz de se movimentar para a direita no começo', () => {

    component.goNavRight();

    expect(component.posSlides).toBeLessThan(0);
  });
});
