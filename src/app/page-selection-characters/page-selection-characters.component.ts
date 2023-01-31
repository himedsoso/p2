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

  title = this.data.title;

  heroeComponent1!:object
  heroeComponent2!:object

  page3(): void {
    this.router.navigate(["/recap"]);
   
  }

  ngOnInit(): void {

    this.heroeService.OnInit()
    // console.log(this.heroeComponent1)
    // console.log(this.heroeComponent2)
   }

   changeHeroe1(heroes1ToParent:object){
    this.heroeComponent1 = heroes1ToParent
    // console.log(this.heroeComponent1)
   }
   changeHeroe2(heroes2ToParent:object){
    this.heroeComponent2 = heroes2ToParent
    // console.log(this.heroeComponent2)
   }

   saveHero(hero1:object,hero2:object){
     this.heroeService.heroesSelected(hero1,hero2)

   }
   
}
