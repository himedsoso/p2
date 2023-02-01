import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaintingService {
  heroes1 : number = 70;
  heroes2 : number = 149;


  constructor(private apelleApi : HttpClient) { }

  api() {
    this.apelleApi.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${this.heroes1}.json`)
  }

  api2() {
    this.apelleApi
  }
}
