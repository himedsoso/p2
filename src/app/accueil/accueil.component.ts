import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  constructor (private router: Router, private name : DataService){
  }
titre = this.name.title
select() {
  this.router.navigate(["/selection-perso"])
}
}
