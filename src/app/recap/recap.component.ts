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
}
