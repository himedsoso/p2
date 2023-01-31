import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroesInformationsService } from '../heroes-informations.service';


@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styleUrls: ['./card-heroe.component.scss']
})


export class CardHeroeComponent implements OnInit {

  constructor(private heroes: HeroesInformationsService, private window: Window) { }

  @Output()
  ChangeHeroe: EventEmitter<object> = new EventEmitter();

sendDataToParent(): void {
  this.ChangeHeroe.emit(this.randomHeroes[this.selected]);
}

   randomHeroes: any;
   selected:number=0;

  // on regarde la taille de l'écran l'ors du démarrage 
  windowWidth(): boolean {
    if (this.window.innerWidth > 800) {
      return true
    } else {
      return false
    }
  }
  
  ngOnInit() {
    // on recupére les info de l'API au démarage 
    this.heroes.OnInit().subscribe(apiHeroes => this.randomCard(apiHeroes))
    }

    // On recupére 20 perso aléatoirement 
    randomCard(apiHeroes: any) {
      const randomHeroesArr = []
      for (let i = 0; i < 20; i++) {
        randomHeroesArr.push(apiHeroes[Math.floor(Math.random() * 563)])
      }
      this.getRandomHeroes(randomHeroesArr)
    }

  //  on stock les infos des perso via une fonction async (getRandomHeroes) dans un tableau (randomHeroes)
    async getRandomHeroes(randomHeroesArr: any) {

      this.randomHeroes = await randomHeroesArr
      this.sendDataToParent()
    }
  
    backPerso(){
      if(this.selected === 0){
        this.selected = 19
       this.sendDataToParent()
      }
      this.selected--
      this.sendDataToParent()
    }
    nextPerso(){
      if(this.selected === 19){
        this.selected = 0
        this.sendDataToParent()
      }
      this.selected++
      this.sendDataToParent()
    }
  
}
