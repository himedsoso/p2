import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFinService {

  constructor(private http:HttpClient) { }

  isModalDisplayed : boolean = false;
  
  datas:any;
  getData() {
    this.http.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .subscribe(res =>{
      this.datas = res;
    })
  }

  

}
