import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroesInformationsService {
<<<<<<< HEAD

  constructor(private http: HttpClient) { }
=======

  constructor(private http: HttpClient) { }


>>>>>>> 775f463fa551c3f090f2bd0eea3548784a283615

getData(){
  return this.http.get("https://akabab.github.io/superhero-api/api/all.json")
}
<<<<<<< HEAD
// 1er liste de perso a prendre:
  idsUsable = [
    58, 63, 70, 73, 145, 149, 151, 242, 265, 275, 333, 345, 547, 687, 731,
    346, 717, 720, 727
  ]


// getData(){
//   return this.http.get("https://akabab.github.io/superhero-api/api/all.json")
// }
// // 1er liste de perso a prendre:
//   idsUsable = [
//     58, 63, 70, 73, 145, 149, 151, 242, 265, 275, 333, 345, 547, 687, 731,
//     346, 717, 720, 727
//   ]


  linkApi: string = "https://akabab.github.io/superhero-api/api/all.json";

  fullRandomHeroes: any;

  heroe1: any;
  heroe2: any;

  // A l'affichage de la page d'accueil
  OnInit() {
   return this.http.get(this.linkApi);
  
  };

  // on recupére les info de l'API au démarage 
  // dataApi(linkApi: any) {
  //   linkApi.subscribe((apiHeroes: any) => this.randomCard(apiHeroes))
  // };

  // On recupére 20 perso aléatoirement 
  // randomCard(apiHeroes: any) {
  //   const randomHeroesArr = [];
  //   for (let i = 0; i < 2; i++) {
  //     randomHeroesArr.push(apiHeroes[Math.floor(Math.random() * 563)]);
  //   }
  //   // this.getRandomHeroes(randomHeroesArr);
  // }

  //  on stock les infos des perso via une fonction async (getRandomHeroes) dans un tableau (randomHeroes)
  // async getRandomHeroes(randomHeroesArr: any) {

  //   this.heroe1 = await randomHeroesArr[0];
  //   this.heroe2 = await randomHeroesArr[1];
  //   this.fullRandomHeroes = await randomHeroesArr;
  //   console.log(this.fullRandomHeroes)

  // }



}
=======
  
  linkApi: string = "https://akabab.github.io/superhero-api/api/all.json";
  
  fullRandomHeroes: any;
  
  figthers: any[]=[];
  heroe1!:object;
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
    
>>>>>>> 775f463fa551c3f090f2bd0eea3548784a283615

  
}
