import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HeroesInformationsService {

  constructor(private http: HttpClient) { }

getData(){
  return this.http.get("https://akabab.github.io/superhero-api/api/all.json")
}
// 1er liste de perso a prendre:
  idsUsable = [
    58, 63, 70, 73, 145, 149, 151, 242, 265, 275, 333, 345, 547, 687, 731,
    346, 717, 720, 727
  ]

}

// code a mettre dans le component qui doit affiché les perso! 
    // listOfHeroes:any
  
  // ngOnInit() {
  // this.heroes.getData().subscribe(list => this.listOfHeroes=list)
  // }
// fin du code