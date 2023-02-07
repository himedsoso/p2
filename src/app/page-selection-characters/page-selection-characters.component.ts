import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesInformationsService } from 'src/app/heroes-informations.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page-selection-characters',
  templateUrl: './page-selection-characters.component.html',
  styleUrls: ['./page-selection-characters.component.scss']
})
export class PageSelectionCharactersComponent implements OnInit {

  constructor(private router: Router, private data: DataService, private heroeService :HeroesInformationsService){}

  // Récuperation du titre.
  title = this.data.title;

// Stockage des heros choisis dans le composent enffant.
heroeComponent1!:object
heroeComponent2!:object

// Stockage des armes choisis dans le composent enffant.
  weaponComponent1!:object
  weaponComponent2!:object

  // A l'initialisation du composent on appel le service qui contien l'api.
  ngOnInit(): void {
    this.heroeService.OnInit()
  }
  
  // On stock les données envoyer par les composents enffants.
  changeHeroe1(heroes1ToParent:object){
    this.heroeComponent1 = heroes1ToParent
  }
  changeHeroe2(heroes2ToParent:object){
    this.heroeComponent2 = heroes2ToParent
  }

  changeWeapon1(weapon1ToParent:object){
    this.weaponComponent1 = weapon1ToParent
  }
  changeWeapon2(weapon2ToParent:object){
    this.weaponComponent2 = weapon2ToParent
  }

  // Au clique on change de page et on envoie les personnages et les armes sélectionnées dans le service.
  page3(): void {
    this.router.navigate(["/recap"]);
  }
  saveHero(hero1:object,hero2:object){
    this.heroeService.heroesSelected(hero1,hero2)
  }
  saveWeapon(WeaponHero1:object,weaponHero2:object){
    this.heroeService.weaponSelected(WeaponHero1,weaponHero2)
  }
   
}
