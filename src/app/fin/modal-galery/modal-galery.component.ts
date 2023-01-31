import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  
  hideModal(){
    this.heroes.isModalDisplayed = !this.heroes.isModalDisplayed
  }

  displayAllHeroes(){
    this.heroesDisplayed = this.heroes.datas
  }

  displayOnlyHumanHeroes () {
    this.heroesDisplayed = this.heroes.datas.filter((hero: { appearance: { race: string; }; }) => hero.appearance.race === "Human")
   }

  displayOnlyNonHumanHeroes(){
    this.heroesDisplayed = this.heroes.datas.filter((hero: { appearance: { race: string; }; }) => hero.appearance.race !== "Human")
   }

  


  
  

 

  
  
}
