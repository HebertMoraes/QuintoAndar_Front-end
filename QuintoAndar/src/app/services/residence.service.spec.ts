import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ResidenceService } from './residence.service';

describe('ResidenceService', () => {

  let service: ResidenceService;

  const getAllMockData = [
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
      "squareMeters": "50m",
      "rooms": "3 quartos"
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
      "squareMeters": "50m",
      "rooms": "4 quartos"
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
      "squareMeters": "40m",
      "rooms": "2 quartos"
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
      "squareMeters": "40m",
      "rooms": "3 quartos"
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
      "squareMeters": "25m",
      "rooms": "1 quartos"
    }
  ];

  const getByID123MockData = [
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
      "squareMeters": "50m",
      "rooms": "3 quartos"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ResidenceService);
  });

  it('getByID retornando apenas um Residence dentro do array', () => {

    expect(getByID123MockData).toHaveSize(1);
  });

  it('getAll retornando mais de um Residence dentro do array', () => {

    expect(getAllMockData).not.toHaveSize(0);
    expect(getAllMockData).not.toHaveSize(1);
  });

  it('O state não é nulo e é do tipo string', () => {
    expect(getByID123MockData[0].address.state).toBeInstanceOf(String);
  });

  it('os states e street de cada residence do getAll não são falsys', () => {
    
    getAllMockData.forEach(residence => {
      expect(residence.address.state).not.toBeFalsy();
      expect(residence.address.street).not.toBeFalsy();
    });
  });

  // it('eee', () => {
  //   expect(100).toBeCloseTo(100, 2);
  // })

});
