import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroesInformationsService } from '../heroes-informations.service';

@Component({
  selector: 'app-card-selection-weapon',
  templateUrl: './card-selection-weapon.component.html',
  styleUrls: ['./card-selection-weapon.component.scss']
})
export class CardSelectionWeaponComponent implements OnInit {

  selected: number = 0

  weapons:any=   [{
    "name": "No weapon",
    "description": "Figth without weapon.",
    "img": "assets/weapon/SansArmes.jpeg"
  }]


// A l'affichage on envoie l'arme 1.

constructor(private weaponApi:HeroesInformationsService){}

ngOnInit(): void {
  this.weaponApi.weaponApi().subscribe(weapons => this.weapons=weapons)
  this.sendDataToParent()
}

// On crée un évennement pour préparé l'envoie des données de l'arme.
  @Output()
  ChangeWeapon: EventEmitter<object> = new EventEmitter();

  // On utilise la methode sendDataToParent pour envoier les données de l'arme.
  sendDataToParent(): void {
    this.ChangeWeapon.emit(this.weapons[this.selected]);
  }
// Au clique on change d'arme et on appel la methode sendDataToParent pour actualiser les données.
  backWeapon() {
    if (this.selected === 0) {
      this.selected = 8
      this.sendDataToParent()
    }else{
      this.selected--
      this.sendDataToParent()
    }
  }
  nextWeapon() {
    if (this.selected === 8) {
      this.selected = 0
      this.sendDataToParent()
    }else{
      this.selected++
      this.sendDataToParent()
    }
  }



}
