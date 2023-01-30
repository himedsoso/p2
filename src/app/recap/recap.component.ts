import { ResourceLoader } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { timeout } from 'rxjs';
@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss'],
})
export class RecapComponent implements OnInit, OnDestroy {
  clear:any;
  setTimeout: any;
  constructor(private router:Router){}
 




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
   
  }

  ngOnDestroy(): void {
    clearTimeout(this.clear)
  }
 

 
}





