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
  weapon1: any;
  weapon2: any;
  myTimer: any;
  show: string = `il reste ${this.hero1_life} à`;
  randomNumber: any;
  alive: boolean = true;
  hero1Win: boolean = false;
  hero2Win: boolean = false;
  desktop: boolean = true;


  // Competences des heros
  // life
  // intelligence
  // strength
  // speed
  // durability
  // power
  // combat

// -------------------------  Function Mecanic Fight  ---------------------------------------

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

  showWin(hero) {
    if (hero === this.hero1) {
      this.hero1Win = true;
      return this.hero1.name;
    } else {
      this.hero2Win = true;
      return this.hero2.name;
    }
  }

  papierToilette(hero) {
    //-------------------------------- Hero 1 ---------------------------

    if (hero == this.hero1) {
    console.log('papier toilette HEROS 1');
      this.randomNumber = Math.floor(Math.random() * 11);
      console.log("random 1 :", this.randomNumber);
      // -------- positif ----------------
      if (this.randomNumber == 0) {
        this.hero1.powerstats.power += 40;
        console.log('Power du heros 1 : ', this.hero1.powerstats.power);
      } else if (this.randomNumber == 1) {
        this.hero1.powerstats.combat += 40;
        console.log('Combat du heros 1 : ', this.hero1.powerstats.combat);
      } else if (this.randomNumber == 2) {
        this.hero1.powerstats.intelligence += 40;
        console.log('intelligence du heros 1 : ', this.hero1.powerstats.intelligence);
      } else if (this.randomNumber == 3) {
        this.hero1.powerstats.strength += 40;
        console.log('Strength du heros 1 : ', this.hero1.powerstats.strength);
      } else if (this.randomNumber == 4) {
        this.hero1.powerstats.durability += 40;
        console.log('Durability du heros 1 : ', this.hero1.powerstats.durability);
      } else if (this.randomNumber == 5) {
        this.hero1.powerstats.speed += 40;
        console.log('Speed du heros 1 : ', this.hero1.powerstats.speed);
        // ------- négatif --------------
      } else if (this.randomNumber == 6) {
        this.hero1.powerstats.combat -= 30;
        console.log('Combat du heros 2 : ', this.hero1.powerstats.combat);
      } else if (this.randomNumber == 7) {
        this.hero1.powerstats.power -= 30;
        console.log('Power du heros 2 : ', this.hero1.powerstats.power);
      } else if (this.randomNumber == 8) {
        this.hero1.powerstats.intelligence -= 30;
        console.log('Intelligence du heros 2 : ', this.hero1.powerstats.intelligence);
      } else if (this.randomNumber == 9) {
        this.hero1.powerstats.durability -= 30;
        console.log('Durability du heros 2 : ', this.hero1.powerstats.durability);
      } else if (this.randomNumber == 10) {
        this.hero1.powerstats.speed -= 30;
        console.log('Speed du heros 2 : ', this.hero1.powerstats.speed);
      } else if (this.randomNumber == 11) {
        this.hero1.powerstats.strength -= 30;
        console.log('Strength du heros 2 : ', this.hero1.powerstats.strength);
      }
    } 

    //-------------------------------- Hero 2 ---------------------------
    
    else if (this.hero2) {
    console.log('papier toilette HEROS 2');
      this.randomNumber = Math.floor(Math.random() * 11);
      console.log("random 2 :", this.randomNumber);

      // -------- positif ----------------
      if (this.randomNumber == 0) {
        this.hero2.powerstats.power += 30;
        console.log('power du heros 2 : ', this.hero2.powerstats.power);
      } else if (this.randomNumber == 1) {
        this.hero2.powerstats.combat += 30;
        console.log('combat du heros 2 : ', this.hero2.powerstats.combat);
      } else if (this.randomNumber == 2) {
        this.hero2.powerstats.intelligence += 30;
        console.log('intelligence du heros 2 : ', this.hero2.power.combat);
      } else if (this.randomNumber == 3) {
        this.hero2.powerstats.strength += 30;
        console.log('strength du heros 2 : ', this.hero2.powerstats.strength);
      } else if (this.randomNumber == 4) {
        this.hero2.powerstats.durability += 30;
        console.log('durability du heros 2 : ', this.hero2.powerstats.durability);
      } else if (this.randomNumber == 5) {
        this.hero2.powerstats.speed += 30;
        console.log('speed du heros 2 : ', this.hero2.powerstats.speed);
        // ------- négatif --------------
      } else if (this.randomNumber == 6) {
        this.hero2.powerstats.combat -= 30;
        console.log('combat du heros 2 : ', this.hero2.powerstats.combat);
      } else if (this.randomNumber == 7) {
        this.hero2.powerstats.power -= 30;
        console.log('power du heros 2 : ', this.hero2.powerstats.power);
      } else if (this.randomNumber == 8) {
        this.hero2.powerstats.intelligence -= 30;
        console.log('intelligence du heros 2 : ', this.hero2.power.intelligence);
      } else if (this.randomNumber == 9) {
        this.hero2.powerstats.durability -= 30;
        console.log('durability du heros 2 : ', this.hero2.powerstats.durability);
      } else if (this.randomNumber == 10) {
        this.hero2.powerstats.speed -= 30;
        console.log('speed du heros 2 : ', this.hero2.powerstats.speed);
      } else if (this.randomNumber == 11) {
        this.hero2.powerstats.strength -= 30;
        console.log('strength du heros 2 : ', this.hero2.powerstats.strength);
      }
    }
  }

  poele(hero) {
    if (hero == this.hero1) {
      this.hero1_life += 30;
      console.log('vie du héros 1 : ', this.hero1_life);
    } else if (hero == this.hero2) {
      this.hero2_life += 30;
      console.log('vie du héros 2 : ', this.hero2_life);
    }
  }

  cake(hero) {
    if (hero == this.hero1) {
      this.hero1.powerstats.strength += 30;
      console.log('Strength du héros 1 : ', this.hero1.powerstats.strength);
    } else if (hero == this.hero2) {
      this.hero2.powerstats.strength += 30;
      console.log('Strength du héros 2 : ', this.hero2.powerstats.strength);
    }
  }

  pc(hero) {
    if (hero == this.hero1) {
      this.hero1.powerstats.intelligence += 30;
      console.log('Intelligence du héros 1 : ', this.hero1.powerstats.intelligence);
    } else if (hero == this.hero2) {
      this.hero2.powerstats.intelligence += 30;
      console.log('Intelligence du héros 1 : ', this.hero2.powerstats.intelligence);
    }
  }

  kunai(hero) {
    if (hero == this.hero1) {
      this.hero1.powerstats.speed += 30;
      console.log('Speed du héros 1 : ', this.hero1.powerstats.speed);
    } else if (hero == this.hero2) {
      this.hero2.powerstats.speed += 30;
      console.log('Speed du héros 2 : ', this.hero2.powerstats.speed);
    }
  }

  nunchaku(hero) {
    if (hero == this.hero1) {
      this.hero1.powerstats.combat += 30;
      console.log('Combat du héros 1 : ', this.hero1.powerstats.combat);
    } else if (hero == this.hero2) {
      this.hero2.powerstats.combat += 30;
      console.log('Combat du héros 2 : ', this.hero2.powerstats.combat);
    }
  }

  gnome(hero) {
    if (hero == this.hero1) {
      this.hero1.powerstats.combat += 30;
      console.log('Combat du héros 1 : ', this.hero1.powerstats.combat);
    } else if (hero == this.hero2) {
      this.hero2.powerstats.combat += 30;
      console.log('Combat du héros 2 : ', this.hero2.powerstats.combat);
    }
  }

  molotov(hero) {

  }


  // ---------------------------- fonction des powerstats ----------------------------------
  combat(){
    console.log('---------- 1 etape ----------');
        // test combat
        if (this.hero1_life > 0 && this.hero2_life > 0 && 
          this.hero1.powerstats.combat >= this.hero2.powerstats.combat) {
          this.punch(this.hero1.name, this.hero2.name);
          this.damageHero2();
          this.showLifeHero2();
          } else if (this.hero2_life > 0 && this.hero1_life > 0 &&
              this.hero1.powerstats.combat <= this.hero2.powerstats.combat) {
              this.punch(this.hero2.name, this.hero1.name);
              this.damageHero1();
              this.showLifeHero1();
          } else if (this.hero1_life <= 0) {
            this.endFight();
            this.alive = false;
            console.log(this.hero2.name," WIN !!!");
          } else if (this.hero2_life <= 0){
            this.endFight();
            this.alive = false;
            console.log(this.hero1.name," WIN!!!");
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
          } else if (this.hero2_life > 0 && this.hero1_life > 0 &&
              this.hero1.powerstats.power <= this.hero2.powerstats.power) {
              this.punch(this.hero2.name, this.hero1.name);
              this.damageHero1();
              this.showLifeHero1();
          } else if (this.hero1_life <= 0) {
            this.endFight();
            this.alive = false;
            console.log(this.hero2.name," WIN !!!");
          } else if (this.hero2_life <= 0){
            this.endFight();
            this.alive = false;
            console.log(this.hero1.name," WIN!!!");
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
      } else if (this.hero2_life > 0 && this.hero1_life > 0 && 
          this.hero1.powerstats.speed <= this.hero2.powerstats.speed) {
          this.punch(this.hero2.name, this.hero1.name);
          this.damageHero1();
          this.showLifeHero1();
      } else if (this.hero1_life <= 0) {
        this.endFight();
        this.alive = false;
        console.log(this.hero2.name," WIN !!!");
      } else if (this.hero2_life <= 0){
        this.endFight();
        this.alive = false;
        console.log(this.hero1.name," WIN!!!");
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
      } else if (this.hero2_life > 0 && this.hero1_life > 0 &&
          this.hero1.powerstats.durability <= this.hero2.powerstats.durability) {
          this.punch(this.hero2.name, this.hero1.name);
          this.damageHero1();
          this.showLifeHero1();
      } else if (this.hero1_life <= 0) {
        this.endFight();
        this.alive = false;
        console.log(this.hero2.name," WIN !!!");
      } else if (this.hero2_life <= 0){
        this.endFight();
        this.alive = false;
        console.log(this.hero1.name," WIN!!!");
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
      } else if (this.hero2_life > 0 && this.hero1_life > 0 && 
          this.hero1.powerstats.intelligence <= this.hero2.powerstats.intelligence) {
          this.punch(this.hero2.name, this.hero1.name);
          this.damageHero1();
          this.showLifeHero1();
      } else if (this.hero1_life <= 0) {
        this.endFight();
        this.alive = false;
        console.log(this.hero2.name," WIN !!!");
      } else if (this.hero2_life <= 0){
        this.endFight();
        this.alive = false;
        console.log(this.hero1.name," WIN!!!");
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
      } else if (this.hero2_life > 0 && this.hero1_life > 0 && 
          this.hero1.powerstats.strength <= this.hero2.powerstats.strength) {
          this.punch(this.hero2.name, this.hero1.name);
          this.damageHero1();
          this.showLifeHero1();
      } else if (this.hero1_life <= 0) {
        this.endFight();
        this.alive = false;
        console.log(this.hero2.name," WIN !!!");
      } else if (this.hero2_life <= 0){
        this.endFight();
        this.alive = false;
        console.log(this.hero1.name," WIN!!!");
      }
  }

  weaponsHero1() {
    // ----------------- Héros 1 ---------------------------
    if (this.hero1 && this.weapon1.name === 'Toilet paper') {
      this.papierToilette(this.hero1);
    } else if (this.hero1 && this.weapon1.name === 'Poêle') {
      this.poele(this.hero1);
    } else if (this.hero1 && this.weapon1.name === 'Cakes') {
      this.cake(this.hero1);
    } else if (this.hero1 && this.weapon1.name === 'Pc') {
      this.pc(this.hero1);
    } else if (this.hero1 && this.weapon1.name === 'Kunai') {
      this.kunai(this.hero1);
    } else if (this.hero1 && this.weapon1.name === 'Nunchaku') {
      this.nunchaku(this.hero1);
    } else if (this.hero1 && this.weapon1.name === 'Garden gnome') {
      this.gnome(this.hero1);
    } else if (this.hero1 && this.weapon1.name === 'Molotov') {
      this.molotov(this.hero1);
    } 
  }

  weaponsHero2() {
    // --------------- Héros 2 -----------------------
    if (this.hero2 && this.weapon2.name === 'Toilet paper') {
      this.papierToilette(this.hero2);
    } else if (this.hero2 && this.weapon2.name === 'Poêle') {
      this.poele(this.hero2);
    } else if (this.hero2 && this.weapon2.name === 'Cakes') {
      this.cake(this.hero2);
    } else if (this.hero2 && this.weapon2.name === 'Pc') {
      this.pc(this.hero2);
    } else if (this.hero2 && this.weapon2.name === 'Kunai') {
      this.kunai(this.hero2);
    } else if (this.hero2 && this.weapon2.name === 'Nunchaku') {
      this.nunchaku(this.hero2);
    } else if (this.hero2 && this.weapon2.name === 'Garden gnome') {
      this.gnome(this.hero2);
    } else if (this.hero2 && this.weapon2.name === 'Molotov') {
      this.molotov(this.hero2);
    } 
  }
  
  endFight() {
    clearTimeout(this.myTimer);
  }



  // ------------ lancement de test ----------
  ngOnInit() {  
    this.hero1 = this.heroe.heroe1;
    this.hero2 = this.heroe.heroe2;
    this.weapon1 = this.heroe.weaponHeroe1;
    this.weapon2 = this.heroe.weaponHeroe2;

    this.weaponsHero1();
    this.weaponsHero2();

    console.log(this.weapon1);
    console.log(this.weapon2);

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
