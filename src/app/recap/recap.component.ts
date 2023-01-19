import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent {
  constructor(private router:Router){};

  page3():void{
    this.router.navigate(["/fight"]);
  }

  // const loader = document.querySelector('.loader');

  // window.addEventListner('load', () => {

  //   loader.classList.add('fondu-out');
  // })


}
