import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-selection-characters',
  templateUrl: './page-selection-characters.component.html',
  styleUrls: ['./page-selection-characters.component.scss']
})
export class PageSelectionCharactersComponent {
constructor(private router:Router){};

page3():void{
  this.router.navigate(["/fight"]);
}

}
