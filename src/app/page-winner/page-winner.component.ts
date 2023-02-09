import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { HeroesInformationsService } from '../heroes-informations.service';

@Component({
  selector: 'app-page-winner',
  templateUrl: './page-winner.component.html',
  styleUrls: ['./page-winner.component.scss']
})
export class PageWinnerComponent implements OnInit {

  title = 'The Winner is :';

  constructor(private router:Router, public heroe: HeroesInformationsService) {} 

  winner: any;
  clear:any;

  ngOnInit() {
    this.winner = this.heroe.winner;
    this.chargement();
  }
  goFin():void{
    this.router.navigate(['/fin'])
  }
  chargement(): void {
    this.clear = setTimeout(() =>this.goFin(), 5000)
    
  }

  ngOnDestroy ():void {
    clearTimeout(this.clear)
  }

  // page5() {
  //   this.router.navigate(['/page5']);
  // }

}


