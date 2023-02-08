import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { test } from 'src/assets/test';
import { HeroesInformationsService } from '../heroes-informations.service';

@Component({
  selector: 'app-page-winner',
  templateUrl: './page-winner.component.html',
  styleUrls: ['./page-winner.component.scss']
})
export class PageWinnerComponent implements OnInit {
  constructor(private router:Router, public heroe: HeroesInformationsService) {} 

  winner: any;

  ngOnInit() {
    this.winner = this.heroe.winner;
  }
}


