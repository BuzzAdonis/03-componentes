import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import{Componente}from'../interfaces/interfaces'
import{delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }


  getMenuOption(){
    return this.http.get<Componente[]>('/assets/data/menuOption.json');
  }

  getHeroes(){
    return this.http.get<Componente[]>('/assets/data/superheroes.json').pipe(
      delay(1500)
    );}
}
