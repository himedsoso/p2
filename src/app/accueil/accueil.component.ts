import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HeroesInformationsService } from '../heroes-informations.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent{

  constructor (private router: Router,private titleService:DataService){}

  title = this.titleService.title;


  select() {
    this.router.navigate(["/selection-perso"])
  }



}
