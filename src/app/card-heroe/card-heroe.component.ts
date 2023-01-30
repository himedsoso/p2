import { Component, Injectable, OnInit } from '@angular/core';
import { HeroesInformationsService } from '../heroes-informations.service';


@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styleUrls: ['./card-heroe.component.scss']
})


export class CardHeroeComponent implements OnInit {

  constructor(private heroes: HeroesInformationsService, private window: Window) { }

   randomHeroes: any;


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
      for (let i = 0; i < 1; i++) {
        randomHeroesArr.push(apiHeroes[Math.floor(Math.random() * 563)])
      }
      this.getRandomHeroes(randomHeroesArr)
    }

  //  on stock les infos des perso via une fonction async (getRandomHeroes) dans un tableau (randomHeroes)
    async getRandomHeroes(randomHeroesArr: any) {

      this.randomHeroes = await randomHeroesArr
    }
  
  // ngOnInit(): void {
    
  //   this.randomHeroes = this.heroes.fullRandomHeroes;

  // }

  
}
