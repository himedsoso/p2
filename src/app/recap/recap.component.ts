import { ResourceLoader } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { timeout } from 'rxjs';
import { HeroesInformationsService } from 'src/app/heroes-informations.service';


@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss'],
})
export class RecapComponent implements OnInit, OnDestroy {
  clear:any;
  setTimeout: any;
 
  
  constructor(private router:Router, public heroeService :HeroesInformationsService){



    // this.heroe1Images = this.heroeService.heroe1?.images.xs
  }
 
  heroeComponent1!:object
  heroeComponent2!:object



  page3():void{
    this.router.navigate(["/fight"]);
  }

  page2():void{
    this.router.navigate(["/selection-perso"]);
  }


  chargement(): void {
    this.clear = setTimeout(() =>this.page3(), 4000)
    
  }



  ngOnInit() {
    
    this.chargement()
    // this.heroeService.OnInit()
   
  }

  ngOnDestroy(): void {
    clearTimeout(this.clear)
    
  }
 
 
  
 
}





