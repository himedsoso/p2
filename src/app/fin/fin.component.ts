import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFinService } from './data-fin.service';

@Component({
  selector: 'app-fin',
  templateUrl: './fin.component.html',
  styleUrls: ['./fin.component.scss']
})
export class FinComponent {

  

  constructor (private router : Router, public heroes: DataFinService) {}

  

  returnHome() {
    return this.router.navigate(["/accueil"]);
  }
  startAgain(){
    return this.router.navigate(["/selection-perso"]);
  }
  openModal(){
    this.heroes.isModalDisplayed = !this.heroes.isModalDisplayed
    this.heroes.getData()
  

}
}
