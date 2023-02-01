import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  hero = fetch("https://akabab.github.io/superhero-api/api/all.json")
  .then(response => response.json())
  .then(data => console.log(data));
}
