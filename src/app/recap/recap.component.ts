import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent {
  constructor(private router:Router){}
 




  page3():void{
    this.router.navigate(["/fight"]);
  }

  page2():void{
    this.router.navigate(["/selection-perso"]);
  }
  // const loader = document.querySelector('.loader');

  // window.addEventListner('load', () => {

  //   loader.classList.add('fondu-out');
  // })

  
 
}


// function miseEnAttente()
// {
//  //Traitement
//  setTimeout(fonctionAExecuter, 3000); //On attend 3 secondes avant d'exécuter la fonction
// }
// function fonctionAExecuter()
// {
//   alert("bonjour");
// }

// miseEnAttente();