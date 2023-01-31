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
// 1er liste de perso a prendre:
  // idsUsable = [
  //   58, 63, 70, 73, 145, 149, 151, 242, 265, 275, 333, 345, 547, 687, 731,
  //   346, 717, 720, 727
  // ]
  
  linkApi: string = "https://akabab.github.io/superhero-api/api/all.json";
  
  fullRandomHeroes: any;
  
  figthers: any[]=[];
  heroe1!:object;
  heroe2!:object;
  
  // A l'affichage de la page d'accueil
  OnInit() {
    return this.http.get(this.linkApi);
    
  };
  
  // On recupére 20 perso aléatoirement 
  // randomCard(apiHeroes: any) {
  //   const randomHeroesArr = [];
  //   for (let i = 0; i < 20; i++) {
  //     randomHeroesArr.push(apiHeroes[Math.floor(Math.random() * 563)]);
  //   }
  // }
  
  heroesSelected(heroeSelected1:object,heroeSelected2:object):void{
    this.heroe1=heroeSelected1
    this.heroe2=heroeSelected2
    console.log(this.heroe1)
    console.log(this.heroe2)
  }
    

  
}

