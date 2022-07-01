import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
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

  public getById(id: string) {
    return this.http.get<Residence>(`${baseUrl}/id/${id}`);
  }

  // public getByState(state: string) {
  //   return this.http.get<Residence[]>(`${baseUrl}/state/${state}`);
  // }


  public getByState(state: string) {
        
    const allResidence = this.getAll();
    
    return allResidence.pipe ( 
        map(residences => residences.filter(
            eachResidence => eachResidence.address.state === state)) );
}
}
