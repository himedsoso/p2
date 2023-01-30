import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { HeroesInformationsService } from 'src/app/heroes-informations.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page-selection-characters',
  templateUrl: './page-selection-characters.component.html',
  styleUrls: ['./page-selection-characters.component.scss']
})
export class PageSelectionCharactersComponent implements OnInit {
  constructor(private router: Router, private data: DataService, private heroeService :HeroesInformationsService) { }

  title = this.data.title

  page3(): void {
    this.router.navigate(["/recap"]);
   
  }

  ngOnInit(): void {
    // this.heroeService.OnInit()
   }
   

}
