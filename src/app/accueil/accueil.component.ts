import { Component } from '@angular/core';

import { Router } from '@angular/router'

import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {


  title = "Heroes Battle";

  constructor (private router: Router){}

  select() {


  title = "Le jeu des heros";

  constructor (private router: Router){}

select() {

  this.router.navigate(["/selection-perso"])
}
}
