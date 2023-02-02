import { Component, OnInit } from '@angular/core';
import { HeroesInformationsService } from 'src/app/heroes-informations.service';


@Component({
  selector: 'app-timeline-fight',
  templateUrl: './timeline-fight.component.html',
  styleUrls: ['./timeline-fight.component.scss']
})
export class TimelineFightComponent implements OnInit{

  constructor(public heroe: HeroesInformationsService) {}


  hero1: any;
  hero2: any;

  // Competences des heros
  // life
  // intelligence
  // strength
  // speed
  // durability
  // power
  // combat
  // imgUrl
  // isAlive
  // punch
  // randomPunch
  // damage
  // showLife


  // punch(name) {
  //   console.log(name ,'donne un Punch !');
  // }

  // // ------------ fonction des powerstats ----------
  // a(){
  //   console.log('---------- 1 etape ----------');
  //       // test all powerstats
  //       if (this.hero1.powerstats.intelligence > this.hero2.powerstats.intelligence && 
  //         this.hero1.powerstats.strength > this.hero2.powerstats.strength && 
  //         this.hero1.powerstats.speed > this.hero2.powerstats.speed &&
  //         this.hero1.powerstats.durability > this.hero2.powerstats.durability &&
  //         this.hero1.powerstats.power > this.hero2.powerstats.power &&
  //         this.hero1.powerstats.combat > this.hero2.powerstats.combat) {
  //         this.hero1.punch(this.hero1.name);
  //         this.hero1.punch(this.hero1.name);
  //         this.hero1.damage(this.hero2);
  //         this.hero1.damage(this.hero2);
  //         this.hero2.showLife();
  //       } else {
  //           this.hero2.punch(this.hero2.name);
  //           this.hero2.punch(this.hero2.name);
  //           this.hero2.damage(this.hero1);
  //           this.hero2.damage(this.hero1);
  //           this.hero1.showLife();
  //       }
  // }

  // b(){
  //   console.log('---------- 2 etape ----------');
  //       // test powerstats and powerstats
  //       if (this.hero1.powerstats > this.hero2.powerstats && this.hero1.powerstats > this.hero2.powerstats) {
  //           this.hero1.punch(this.hero1.name);
  //           this.hero1.damage(this.hero2);
  //           this.hero2.showLife();
  //       } else {
  //           this.hero2.punch(this.hero2.name);
  //           this.hero2.damage(this.hero1);
  //           this.hero1.showLife();
  //       }
  // }

  // c(){
  //   console.log('---------- 3 etape ----------');
  //   // test powerstats and powerstats
  //   if (this.hero1.isAlive() && this.hero2.isAlive() && this.hero1.powerstats > this.hero2.powerstats && this.hero1.powerstats > this.hero2.powerstats) {
  //     this.hero1.punch(this.hero1.name);
  //     this.hero1.damage(this.hero2);
  //     this.hero2.showLife();
  //   } else {
  //       this.hero2.punch(this.hero2.name);
  //       this.hero2.damage(this.hero1);
  //       this.hero1.showLife();
  //   }
  // }

  // d(){
  //   console.log('---------- 4 etape ----------');
  //   // test powerstats
  //   if (this.hero1.isAlive() && this.hero2.isAlive() && this.hero1.powerstats > this.hero2.powerstats) {
  //     this.hero1.punch(this.hero1.name);
  //     this.hero1.damage(this.hero2);
  //     this.hero2.showLife();
  //   } else {
  //       this.hero2.punch(this.hero2.name);
  //       this.hero2.damage(this.hero1);
  //       this.hero1.showLife();
  //   }
  // }

  // e(){
  //   console.log('---------- 5 etape ----------');
  //   // test powerstats
  //   if (this.hero1.isAlive() && this.hero2.isAlive() && this.hero1.powerstats > this.hero2.powerstats) {
  //     this.hero1.punch(this.hero1.name);
  //     this.hero1.damage(this.hero2);
  //     this.hero2.showLife();
  //   } else {
  //       this.hero2.punch(this.hero2.name);
  //       this.hero2.damage(this.hero1);
  //       this.hero1.showLife();
  //   }
  // }

  // f() {
  //   console.log('---------- 6 etape ----------');
  //   // test powerstats and powerstats
  //   if (this.hero1.isAlive() && this.hero2.isAlive() && this.hero1.powerstats > this.hero2.powerstats && this.hero1.powerstats > this.hero2.powerstats) {
  //     this.hero1.punch(this.hero1.name);
  //     this.hero1.damage(this.hero2);
  //     this.hero2.showLife();
  //   } else if (this.hero2.isAlive() && this.hero1.isAlive() && this.hero1.powerstats < this.hero2.powerstats && this.hero1.powerstats < this.hero2.powerstats) {
  //       this.hero2.punch(this.hero2.name);
  //       this.hero2.damage(this.hero1);
  //       this.hero1.showLife();
  //   } else if (this.hero1.life <= 0) {
  //     console.log("Perso 2 WIN !!!");
  //   } else {
  //     console.log("Perso 1 WIN!!!");
  //   }
  // }

  // g() {
  //   console.log('---------- 7 etape ----------');
  //   // test speed
  //   if (this.hero1.isAlive() && this.hero2.isAlive() && this.hero1.speed > this.hero2.speed) {
  //    this.hero1.punch(this.hero1.name);
  //    this.hero1.damage(this.hero2);
  //    this.hero2.showLife();
  //   } else if (this.hero2.isAlive() && this.hero1.isAlive() && this.hero1.speed < this.hero2.speed) {
  //       this.hero2.punch(this.hero2.name);
  //       this.hero2.damage(this.hero1);
  //       this.hero1.showLife();
  //   } else if (this.hero1.life <= 0) {
  //     console.log("Perso 2 WIN !!!");
  //   } else {
  //     console.log("Perso 1 WIN!!!");
  //   }
  // }

  // h() {
  //   console.log('---------- 7 etape ----------');
  //   // test speed
  //   if (this.hero1.isAlive() && this.hero2.isAlive() && this.hero1.speed > this.hero2.speed) {
  //    this.hero1.punch(this.hero1.name);
  //    this.hero1.damage(this.hero2);
  //    this.hero2.showLife();
  //   } else if (this.hero2.isAlive() && this.hero1.isAlive() && this.hero1.speed < this.hero2.speed) {
  //       this.hero2.punch(this.hero2.name);
  //       this.hero2.damage(this.hero1);
  //       this.hero1.showLife();
  //   } else if (this.hero1.life <= 0) {
  //     console.log("Perso 2 WIN !!!");
  //   } else {
  //     console.log("Perso 1 WIN!!!");
  //   }
    
  // }


  // // ------------ lancement de test ----------
  ngOnInit() {  
    // this.hero1 = this.heroe.heroe1;
    // this.hero2 = this.heroe.heroe2;
    // console.log('le heros 1', this.hero1.powerstats.speed);
    // console.log('le heros 2', this.hero2);

    // setTimeout(() => {
    //   this.a();
    // }, 1000);    
    // setTimeout(() => {
    //   this.b();
    // }, 2000);
  }

}
