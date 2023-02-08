import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFinService {

  constructor(private http:HttpClient) { }
  //création d'une variable qui va vérifier si la galerie est affichée
  isModalDisplayed : boolean = false;
  
  datas:any;
  //methode de récupération des données sur l'api
  getData() {
    this.http.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .subscribe(res =>{
      this.datas = res;
    })
  }

  

}
