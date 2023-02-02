import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroesInformationsService } from '../heroes-informations.service';


@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styleUrls: ['./card-heroe.component.scss']
})


export class CardHeroeComponent implements OnInit {

  constructor(private heroes: HeroesInformationsService) { }


  randomHeroes: any[] = [{images:{md:""},biography:{fullName:""}}];

  selected: number = 0;


  // On cree un evénement qui envoie les donnees du personnage choisis au composant parent.
  @Output()
  ChangeHeroe: EventEmitter<object> = new EventEmitter();

  sendDataToParent(): void {
    this.ChangeHeroe.emit(this.randomHeroes[this.selected]);
  }
  // fin de l'evenement


  // on recupére les info de l'API au démarage 
  ngOnInit() {
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

  // au clique sur le boutton back on change de personnage et on affiche le personnage précédent du tableau.
  backPerso() {
    if (this.selected === 0) {
      this.selected = 19
      this.sendDataToParent()
    } else {

      this.selected--
      this.sendDataToParent()
    }
  }
  // au clique sur le boutton back on change de personnage et on affiche le personnage suivant du tableau.
  nextPerso() {
    if (this.selected === 19) {
      this.selected = 0
      this.sendDataToParent()
    } else {
      this.selected++
      this.sendDataToParent()
    }
  }

}
