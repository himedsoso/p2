import { Component, Input, OnInit } from '@angular/core';
import { DataFinService } from '../data-fin.service'

@Component({
  selector: 'app-modal-galery',
  templateUrl: './modal-galery.component.html',
  styleUrls: ['./modal-galery.component.scss']
})
export class ModalGaleryComponent {
  modalDatas :any = [];  
  heroesDisplayed :any = [];  
  
  constructor(public heroes : DataFinService){}
//création de la méthode qui ferme la galerie  
  hideModal(){
    this.heroes.isModalDisplayed = !this.heroes.isModalDisplayed
  }
//methode d'affichage de tous les héros de l'api
  displayAllHeroes(){
    this.heroesDisplayed = this.heroes.datas
  }
//méthode d'affichage des héros humains
  displayOnlyHumanHeroes () {
    this.heroesDisplayed = this.heroes.datas.filter((hero: { appearance: { race: string; }; }) => hero.appearance.race === "Human")
   }
//méthode d'affichage des héros non humains
  displayOnlyNonHumanHeroes(){
    this.heroesDisplayed = this.heroes.datas.filter((hero: { appearance: { race: string; }; }) => hero.appearance.race !== "Human")
   }
//méthode de récuperations des valeurs des stats pour affichage en barre
  getValue(num :number):string{
    return `${num}%`
  }  
  
}
