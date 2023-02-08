import { Router } from '@angular/router'
import { Component } from '@angular/core';
import { HeroesInformationsService } from 'src/app/heroes-informations.service';

@Component({
  selector: 'app-page-fight',
  templateUrl: './page-fight.component.html',
  styleUrls: ['./page-fight.component.scss']
})
export class PageFightComponent {
  constructor(private router:Router, public heroe: HeroesInformationsService){};

  page4():void{
    this.router.navigate(["/winner"]);
  }

  // Déclarations variables
  hero1: any;
  hero2: any;
  hero1_life: number = 100;
  hero2_life: number = 100;
  myTimer: any;
  timer_a: any;
  timer_b: any;
  timer_c: any;
  timer_d: any;
  timer_e: any;
  timer_f: any;
  timer_g: any;
  timer_h: any;
  timer_i: any;
  timer_j: any;
  timer_k: any;
  show: string = `il reste ${this.hero1_life} à`;
  randomNumber: any;


  // Competences des heros
  // life
  // intelligence
  // strength
  // speed
  // durability
  // power
  // combat



  punch(heroQuiFrappe, heroQuiPrend) {
      console.log(heroQuiFrappe, 'donne un Punch à ', heroQuiPrend);
  }

  randomPunchHero1() {
    return Math.floor(Math.random() * this.hero1.powerstats.power / 10);
  }

  randomPunchHero2() {
    return Math.floor(Math.random() * this.hero2.powerstats.power / 10);
  }

  damageHero1() {
    this.hero1_life -= 10 + this.randomPunchHero2();
  }

  damageHero2() {
    this.hero2_life -= 10 + this.randomPunchHero1();
  }

  showLifeHero1() {
    console.log('Il reste ', this.hero1_life, ' de vie à ', this.hero1.name);
    return this.show;
  }

  showLifeHero2() {
    console.log('Il reste ', this.hero2_life, ' de vie à ', this.hero2.name);
  }

  getLifeValue(num){
    return `${num}%`
  }


  // ------------ fonction des powerstats ----------
  combat(){
    console.log('---------- 1 etape ----------');
        // test combat
        if (this.hero1_life > 0 && this.hero2_life > 0 && 
          this.hero1.powerstats.combat >= this.hero2.powerstats.combat) {
          this.punch(this.hero1.name, this.hero2.name);
          this.damageHero2();
          this.showLifeHero2();
          } else if (this.hero2 && this.hero1 && 
              this.hero1.powerstats.combat <= this.hero2.powerstats.combat) {
              this.punch(this.hero2.name, this.hero1.name);
              this.damageHero1();
              this.showLifeHero1();
          } else if (this.hero1_life <= 0) {
            console.log(this.hero2.name," WIN !!!");
            this.endFight();
          } else if (this.hero2_life <= 0){
            console.log(this.hero1.name," WIN!!!");
            this.endFight();
          }
  }

  power(){
    console.log('---------- 2 etape ----------');
        // test power
        if (this.hero1_life > 0 && this.hero2_life > 0 && 
          this.hero1.powerstats.power >= this.hero2.powerstats.power) {
          this.punch(this.hero1.name, this.hero2.name);
          this.damageHero2();
          this.showLifeHero2();
          } else if (this.hero2 && this.hero1 && 
              this.hero1.powerstats.power <= this.hero2.powerstats.power) {
              this.punch(this.hero2.name, this.hero1.name);
              this.damageHero1();
              this.showLifeHero1();
          } else if (this.hero1_life <= 0) {
            console.log(this.hero2.name," WIN !!!");
            this.endFight();
          } else if (this.hero2_life <= 0){
            console.log(this.hero1.name," WIN!!!");
            this.endFight();
          }
  }

  speed(){
    console.log('---------- 3 etape ----------');
    // test speed
    if (this.hero1_life > 0 && this.hero2_life > 0 && 
      this.hero1.powerstats.speed >= this.hero2.powerstats.speed) {
      this.punch(this.hero1.name, this.hero2.name);
      this.damageHero2();
      this.showLifeHero2();
      } else if (this.hero2 && this.hero1 && 
          this.hero1.powerstats.speed <= this.hero2.powerstats.speed) {
          this.punch(this.hero2.name, this.hero1.name);
          this.damageHero1();
          this.showLifeHero1();
      } else if (this.hero1_life <= 0) {
        console.log(this.hero2.name," WIN !!!");
        this.endFight();
      } else if (this.hero2_life <= 0){
        console.log(this.hero1.name," WIN!!!");
        this.endFight();
      }
  }

  durability(){
    console.log('---------- 4 etape ----------');
    // test durability
    if (this.hero1_life > 0 && this.hero2_life > 0 && 
      this.hero1.powerstats.durability >= this.hero2.powerstats.durability) {
      this.punch(this.hero1.name, this.hero2.name);
      this.damageHero2();
      this.showLifeHero2();
      } else if (this.hero2 && this.hero1 && 
          this.hero1.powerstats.durability <= this.hero2.powerstats.durability) {
          this.punch(this.hero2.name, this.hero1.name);
          this.damageHero1();
          this.showLifeHero1();
      } else if (this.hero1_life <= 0) {
        console.log(this.hero2.name," WIN !!!");
        this.endFight();
      } else if (this.hero2_life <= 0){
        console.log(this.hero1.name," WIN!!!");
        this.endFight();
      }
  }

  intelligence(){
    console.log('---------- 5 etape ----------');
    // test intelligence
    if (this.hero1_life > 0 && this.hero2_life > 0 && 
      this.hero1.powerstats.intelligence >= this.hero2.powerstats.intelligence) {
      this.punch(this.hero1.name, this.hero2.name);
      this.damageHero2();
      this.showLifeHero2();
      } else if (this.hero2 && this.hero1 && 
          this.hero1.powerstats.intelligence <= this.hero2.powerstats.intelligence) {
          this.punch(this.hero2.name, this.hero1.name);
          this.damageHero1();
          this.showLifeHero1();
      } else if (this.hero1_life <= 0) {
        console.log(this.hero2.name," WIN !!!");
        this.endFight();
      } else if (this.hero2_life <= 0){
        console.log(this.hero1.name," WIN!!!");
        this.endFight();
      }
  }

  strength() {
    console.log('---------- 6 etape ----------');
    // test strength
    if (this.hero1_life > 0 && this.hero2_life > 0 && 
      this.hero1.powerstats.strength >= this.hero2.powerstats.strength) {
      this.punch(this.hero1.name, this.hero2.name);
      this.damageHero2();
      this.showLifeHero2();
      } else if (this.hero2 && this.hero1 && 
          this.hero1.powerstats.strength <= this.hero2.powerstats.strength) {
          this.punch(this.hero2.name, this.hero1.name);
          this.damageHero1();
          this.showLifeHero1();
      } else if (this.hero1_life <= 0) {
        console.log(this.hero2.name," WIN !!!");
        this.endFight();
      } else if (this.hero2_life <= 0){
        console.log(this.hero1.name," WIN!!!");
        this.endFight();
      }
  }

  
  endFight() {
    clearTimeout(this.myTimer);
    clearTimeout(this.timer_a);
    clearTimeout(this.timer_b);
    clearTimeout(this.timer_c);
    clearTimeout(this.timer_d);
    clearTimeout(this.timer_e);
    clearTimeout(this.timer_f);
    clearTimeout(this.timer_g);
    clearTimeout(this.timer_h);
    clearTimeout(this.timer_i);
    clearTimeout(this.timer_j);
    clearTimeout(this.timer_k);
  }



  // ------------ lancement de test ----------
  ngOnInit() {  
    this.hero1 = this.heroe.heroe1;
    this.hero2 = this.heroe.heroe2;

    this.myTimer = setInterval(() => {
      this.randomNumber = Math.floor(Math.random() * 10);

      if (this.randomNumber === 0) {
        this.combat();
      }
      if (this.randomNumber === 1) {
        this.power();
      }
      if (this.randomNumber === 2) {
        this.speed();
      }
      if (this.randomNumber === 3) {
        this.durability();
      }
      if (this.randomNumber === 4) {
        this.intelligence();
      }
      if (this.randomNumber === 5) {
        this.strength();
      }
    }, 1000);

  }
}
