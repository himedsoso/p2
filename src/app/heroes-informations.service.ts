import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroesInformationsService {

  constructor(private http: HttpClient) { }

  linkApi: string = "https://akabab.github.io/superhero-api/api/all.json";

  fullRandomHeroes: any;

  figthers: any[]=[]
  heroe1:any=this.figthers[0]
  heroe2:any=this.figthers[1]

  // A l'affichage de la page d'accueil
  OnInit() {
   return this.http.get(this.linkApi);
  
  };

  // On recupére 20 perso aléatoirement 
  randomCard(apiHeroes: any) {
    const randomHeroesArr = [];
    for (let i = 0; i < 2; i++) {
      randomHeroesArr.push(apiHeroes[Math.floor(Math.random() * 563)]);
    }
  }

  heroesSelected(heroeSelected:any):void{
    this.figthers.push(heroeSelected)
  }



}

