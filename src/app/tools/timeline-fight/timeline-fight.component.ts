import { Component, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Perso } from '../../models/perso';


@Component({
  selector: 'app-timeline-fight',
  templateUrl: './timeline-fight.component.html',
  styleUrls: ['./timeline-fight.component.scss']
})
export class TimelineFightComponent implements OnInit{
  // Variables
  dodged: boolean = false;
  title = 'app-material2';
  timelinePerso1 = 0;
  timelinePerso2 = 0;
  perso1 = new Perso('Batman', 100, 70, 70, 65, 78, 95, 100, 'ee');
  perso2 = new Perso('Joker', 100, 60, 50, 60, 47, 78, 89, 'prout');
  interval = 15;

  // Competences Heros
  // Name
  // Life
  // Intelligence
  // Strength
  // Speed
  // Durability
  // Power
  // Combat
  // ImgUrl
  // isAlive
  // punch
  // damage
  // showLife

  // ------------ fonction des combats ----------
  fight() {
    if (this.perso1.isAlive() && this.perso2.isAlive()) {
    // commencement du fight
        console.log('--------- FIN DU FIGHT ------------');
        
    } 
}
  

  a(){
    console.log('---------- 1 etape ----------');
        // test all powerstats
        if (this.perso1.combat > this.perso2.combat && 
          this.perso1.strength > this.perso2.strength && 
          this.perso1.intelligence > this.perso2.intelligence &&
          this.perso1.durability > this.perso2.durability &&
          this.perso1.power > this.perso2.power &&
          this.perso1.combat > this.perso2.combat) {
          this.perso1.punch();
          this.perso1.damage(this.perso2);
          this.perso1.damage(this.perso2);
          this.perso2.showLife();
        } else {
            this.perso2.punch();
            this.perso2.damage(this.perso1);
            this.perso2.damage(this.perso1);
            this.perso1.showLife();
        }
  }

  b(){
    console.log('---------- 2 etape ----------');
        // test intelligence and durability
        if (this.perso1.intelligence > this.perso2.intelligence && this.perso1.durability > this.perso2.durability) {
            this.perso1.punch();
            this.perso1.damage(this.perso2);
            this.perso2.showLife();
        } else {
            this.perso2.punch();
            this.perso2.damage(this.perso1);
            this.perso1.showLife();
        }
  }

  c(){
    console.log('---------- 3 etape ----------');
    // test power and combat
    if (this.perso1.isAlive() && this.perso2.isAlive() && this.perso1.power > this.perso2.power && this.perso1.combat > this.perso2.combat) {
      this.perso1.punch();
      this.perso1.damage(this.perso2);
      this.perso2.showLife();
    } else {
        this.perso2.punch();
        this.perso2.damage(this.perso1);
        this.perso1.showLife();
    }
  }

  d(){
    console.log('---------- 4 etape ----------');
    // test strength
    if (this.perso1.isAlive() && this.perso2.isAlive() && this.perso1.strength > this.perso2.strength) {
      this.perso1.punch();
      this.perso1.damage(this.perso2);
      this.perso2.showLife();
    } else {
        this.perso2.punch();
        this.perso2.damage(this.perso1);
        this.perso1.showLife();
    }
  }

  e(){
    console.log('---------- 5 etape ----------');
    // test combat
    if (this.perso1.isAlive() && this.perso2.isAlive() && this.perso1.combat > this.perso2.combat) {
      this.perso1.punch();
      this.perso1.damage(this.perso2);
      this.perso2.showLife();
    } else {
        this.perso2.punch();
        this.perso2.damage(this.perso1);
        this.perso1.showLife();
    }
  }

  f() {
    console.log('---------- 6 etape ----------');
    // test combat and strength
    if (this.perso1.isAlive() && this.perso2.isAlive() && this.perso1.combat > this.perso2.combat && this.perso1.strength > this.perso2.strength) {
      this.perso1.punch();
      this.perso1.damage(this.perso2);
      this.perso2.showLife();
    } else if (this.perso2.isAlive() && this.perso1.isAlive() && this.perso1.combat < this.perso2.combat && this.perso1.strength < this.perso2.strength) {
        this.perso2.punch();
        this.perso2.damage(this.perso1);
        this.perso1.showLife();
    } else if (this.perso1.life <= 0) {
      console.log("Perso 2 WIN !!!");
    } else {
      console.log("Perso 1 WIN!!!");
    }
  }

  g() {
    console.log('---------- 7 etape ----------');
    // test speed
    if (this.perso1.isAlive() && this.perso2.isAlive() && this.perso1.speed > this.perso2.speed) {
     this.perso1.punch();
     this.perso1.damage(this.perso2);
     this.perso2.showLife();
    } else if (this.perso2.isAlive() && this.perso1.isAlive() && this.perso1.speed < this.perso2.speed) {
        this.perso2.punch();
        this.perso2.damage(this.perso1);
        this.perso1.showLife();
    } else if (this.perso1.life <= 0) {
      console.log("Perso 2 WIN !!!");
    } else {
      console.log("Perso 1 WIN!!!");
    }
  }

  h() {
    console.log('---------- 7 etape ----------');
    // test speed
    if (this.perso1.isAlive() && this.perso2.isAlive() && this.perso1.speed > this.perso2.speed) {
     this.perso1.punch();
     this.perso1.damage(this.perso2);
     this.perso2.showLife();
    } else if (this.perso2.isAlive() && this.perso1.isAlive() && this.perso1.speed < this.perso2.speed) {
        this.perso2.punch();
        this.perso2.damage(this.perso1);
        this.perso1.showLife();
    } else if (this.perso1.life <= 0) {
      console.log("Perso 2 WIN !!!");
    } else {
      console.log("Perso 1 WIN!!!");
    }
    
  }


  // ------------ lancement de test ----------
  ngOnInit() {  
    setTimeout(() => {
      this.a();
    }, 1000);
    setTimeout(() => {
      this.b();
    }, 2000);
    setTimeout(() => {
      this.c();
    }, 3000);
    setTimeout(() => {
      this.d();
    }, 4000);
    setTimeout(() => {
      this.e();
    }, 5000);
    setTimeout(() => {
      this.f();
    }, 6000);
    setTimeout(() => {
      this.g();
    }, 7000);
    setTimeout(() => {
      this.h();
    }, 8000);

  }

  // test() {
  //   // ------------ timer perso 1 --------------
  //   this.timelinePerso1 = window.setInterval(() => {
  //     if (this.perso1.isAlive()) {
  //     this.perso1.punch(); 
  //     this.perso1.damage(this.perso2);
  //     this.perso2.showLife();
  //   }
  //   this.end1();
  //   }, this.interval * this.perso1.speed);

  //   // ----------- timer perso 2--------------
  //   this.timelinePerso2 = window.setInterval(() => {
  //     if (this.perso2.isAlive()) {
  //     this.perso2.punch();
  //     this.perso2.damage(this.perso1);
  //     this.perso1.showLife();
  //   }
  //   this.end2();
  //   }, this.interval * this.perso2.speed);
  // }


  // // --------------- fin des timer des persos -----------
  // end1() {
  //   if (this.perso1.life <= 0) {
  //     clearInterval(this.timelinePerso1);
  //     clearInterval(this.timelinePerso2);
  //   } 
  // }
  // end2() {
  //   if (this.perso2.life <= 0) {
  //     clearInterval(this.timelinePerso1);
  //     clearInterval(this.timelinePerso2);
  //   }
  // }

  

}
