import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content5Component } from './content5.component';
import { HomeComponent } from '../home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResidenceService } from 'src/app/services/residence.service';
import { Residence } from 'src/app/entities/residence';
import { of } from 'rxjs';
import { Address } from 'src/app/entities/address';

describe('Content5Component', () => {
  let component: Content5Component;
  let fixture: ComponentFixture<Content5Component>;

  let fixtureHome: ComponentFixture<HomeComponent>;
  let componentHome: HomeComponent;

  let service: ResidenceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Content5Component, HomeComponent],
      imports: [HttpClientTestingModule],
      providers: [ResidenceService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Content5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixtureHome = TestBed.createComponent(HomeComponent);
    componentHome = fixtureHome.componentInstance;
    fixtureHome.detectChanges();
    service = TestBed.inject(ResidenceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ao selecionar São Paulo no select, as residences é filtradas para as de São Paulo', () => {

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

    let residencesArray: Residence[] = [residenceId123Mock];
    
    let selectStatesContent5HTMLELement = (document.getElementById("select-states-content-5") as HTMLSelectElement);
    selectStatesContent5HTMLELement.value = "São Paulo";
    
    componentHome.btnSellModeToHire = (document.getElementById("btn-to-hire-content5") as HTMLElement);
    componentHome.btnSellModeToBuy = (document.getElementById("btn-to-buy-content5") as HTMLElement);

    spyOn(service, 'filterBySellMode').and.returnValue(of(residencesArray));
    componentHome.updateListOfResidence(selectStatesContent5HTMLELement.value);

    componentHome.listOfResidence.forEach(residence => {
      expect(residence.address.state).toEqual("São Paulo");
    })
  });
});
