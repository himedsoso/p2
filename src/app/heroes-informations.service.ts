import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroesInformationsService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get("https://akabab.github.io/superhero-api/api/all.json")
  }

  linkApi: string = "https://akabab.github.io/superhero-api/api/all.json";
  
  fullRandomHeroes: any;
  
  figthers: any[]=[];
  heroe1:object;
  heroe2!:object;
  
  // A l'affichage de la page d'accueil
  OnInit() {
    return this.http.get(this.linkApi);
    
  };

  
  heroesSelected(heroeSelected1:object,heroeSelected2:object):void{
    this.heroe1=heroeSelected1
    this.heroe2=heroeSelected2
    console.log(this.heroe1)
    console.log(this.heroe2)
  }
}

