import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HeroesInformationsService } from '../heroes-informations.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{


  title = "Heroes Battle";

  constructor (private router: Router,private heroeService: HeroesInformationsService){}

  select() {
    this.router.navigate(["/selection-perso"])
  }

  ngOnInit(): void {
    this.heroeService.OnInit()
   }

}
