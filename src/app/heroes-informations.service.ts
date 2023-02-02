import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroesInformationsService {

  constructor(private http: HttpClient) { }
  
  linkApi: string = "https://akabab.github.io/superhero-api/api/all.json";
  

  heroe1!:object;
  heroe2!:object;
  weaponHeroe1!:object;
  weaponHeroe2!:object;
  
  // A l'affichage de la page de selection des personnage on appel l'api
  OnInit() {
    return this.http.get(this.linkApi);
  };
  
  weaponApi(){
    return this.http.get("../assets/weapon.json")
  }


  // récuperation des données des 2 hero séléctionnés dans la page sélection des personnage.
  heroesSelected(heroeSelected1:object,heroeSelected2:object):void{
    this.heroe1=heroeSelected1
    this.heroe2=heroeSelected2
  }
  
  // récuperation des données des 2 armes séléctionnés dans la page sélection des personnage.
  weaponSelected(weaponSelected1:object,weaponSelected2:object):void{
    this.weaponHeroe1=weaponSelected1
    this.weaponHeroe2=weaponSelected2
  }
    


}
