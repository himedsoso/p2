import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-page-winner',
  templateUrl: './page-winner.component.html',
  styleUrls: ['./page-winner.component.scss']
})
export class PageWinnerComponent {
  constructor(private router:Router
    ){};

page5():void{
  this.router.navigate(["/"]);
}



}