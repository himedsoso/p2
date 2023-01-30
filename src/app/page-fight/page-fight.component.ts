import { Router } from '@angular/router'
import { Component, Input } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar'; 


@Component({
  selector: 'app-page-fight',
  templateUrl: './page-fight.component.html',
  styleUrls: ['./page-fight.component.scss']
})
export class PageFightComponent {
  constructor(private router:Router){};


page4():void{
  this.router.navigate(["/winner"]);
}

}
