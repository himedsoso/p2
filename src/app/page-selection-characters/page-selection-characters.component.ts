import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesInformationsService } from 'src/app/heroes-informations.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page-selection-characters',
  templateUrl: './page-selection-characters.component.html',
  styleUrls: ['./page-selection-characters.component.scss']
})
export class PageSelectionCharactersComponent {
  constructor(private router: Router, private heroes: HeroesInformationsService, private data: DataService) { }

  title = this.data.title

  page3(): void {
    this.router.navigate(["/recap"]);
   
  }

  page2(): void {
    this.router.navigate(["/recap"]);
  }



}

