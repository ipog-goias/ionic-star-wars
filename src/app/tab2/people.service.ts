import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  //injeção de dependência, quer dizer que estou inserindo um objeto
  //que poderá consumir dados da internet (httpClient).
  constructor(private http: HttpClient) { }

  //Vamos listar os dados para serem 'trabalhados' no component.ts
  listarPeople(): any {
    return this.http.get<any>('https://swapi.dev/api/people')
  }
}
