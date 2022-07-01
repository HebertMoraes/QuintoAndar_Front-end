import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, map } from 'rxjs';
import { Residence } from '../entities/residence';

const baseUrl = "http://localhost:3001/residences";

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<Residence[]>(`${baseUrl}`);
  }

  public getById(id: number) {

    return this.getAll().pipe(
      map(residences => residences.filter(
        eachResidence => eachResidence.id === id)
      )
    );
  }

  public getByState(state: string) {

    return this.getAll().pipe(
      map(residences => residences.filter(
        eachResidence => eachResidence.address.state === state)
      )
    );
  }

  public filterBySellMode(state: string, sellMode: string) {

    return this.getByState(state).pipe(
      map(residences => residences.filter(
        eachResidence => eachResidence.sellMode === sellMode)
      )
    );
  }
}
