import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Address } from '../entities/address';
import { Residence } from '../entities/residence';

import { ResidenceService } from './residence.service';

describe('ResidenceService', () => {

  let service: ResidenceService;

  const getAllMock = [
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
    },
    {
      "id": "1234",
      "name": "apartamentoooo-exemplo-2",
      "type": "apartamento",
      "sellMode": "buy",
      "price": "R$1.100,00",
      "address": {
        "state": "São Paulo",
        "street": "Rua Exemplo 2"
      },
      "squareMeters": "50",
      "rooms": "4"
    },
    {
      "id": "12345",
      "name": "casaaaa-exemplo",
      "type": "casa",
      "sellMode": "to-hire",
      "price": "R$555,00",
      "address": {
        "state": "Rio de Janeiro",
        "street": "Rua Exemplo 2"
      },
      "squareMeters": "40",
      "rooms": "2"
    },
    {
      "id": "123456",
      "name": "casaaaa-exemplo-2",
      "type": "casa",
      "sellMode": "buy",
      "price": "R$888,00",
      "address": {
        "state": "Rio de Janeiro",
        "street": "Rua Exemplo 3"
      },
      "squareMeters": "40",
      "rooms": "3"
    },
    {
      "id": "1234567",
      "name": "casaaaa-exemplo-3",
      "type": "casa",
      "sellMode": "buy",
      "price": "R$790,00",
      "address": {
        "state": "Osasco",
        "street": "Rua Exemplo 4"
      },
      "squareMeters": "25",
      "rooms": "1"
    }
  ];

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ResidenceService);
  });

  it('state e street são strings', () => {

    let residencesArray: Residence[] = [residenceId123Mock];

    spyOn(service, 'getAll').and.returnValue(of(residencesArray));

    service.getAll().subscribe(residences => {

      residences.forEach(residence => {
        expect(residence.address.state).toBeInstanceOf(String);
        expect(residence.address.street).toBeInstanceOf(String);
      });
    });
  });

  it('squareMeters e rooms são numbers', () => {

    let residencesArray: Residence[] = [residenceId123Mock];

    spyOn(service, 'getAll').and.returnValue(of(residencesArray));

    service.getAll().subscribe(residences => {

      residences.forEach(residence => {
        expect(residence.squareMeters).toBeInstanceOf(Number);
        expect(residence.rooms).toBeInstanceOf(Number);
      });
    });
  });

  it('getByID retornando apenas um Residence dentro do array', () => {

    expect(getByID123Mock).toHaveSize(1);
  });

  it('getAll retornando mais de um Residence dentro do array', () => {

    expect(getAllMock).not.toHaveSize(0);
    expect(getAllMock).not.toHaveSize(1);
  });

});
