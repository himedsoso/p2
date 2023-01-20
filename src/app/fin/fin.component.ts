import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fin',
  templateUrl: './fin.component.html',
  styleUrls: ['./fin.component.scss']
})
export class FinComponent {

  isDisplayed : boolean = false;

  constructor (private router : Router) {}

  returnHome() {
    return this.router.navigate(["/accueil"]);
  }
  startAgain(){
    return this.router.navigate(["/selection-perso"]);
  }
  displayModal(){
    this.isDisplayed = !this.isDisplayed
  }

}

