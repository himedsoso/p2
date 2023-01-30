import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { Perso } from '../../models/perso';


@Component({
  selector: 'app-timeline-fight',
  templateUrl: './timeline-fight.component.html',
  styleUrls: ['./timeline-fight.component.scss']
})
export class TimelineFightComponent implements OnInit{
  title = 'app-material2';
  timelinePerso1 = 0;
  timelinePerso2 = 0;
  perso1 = new Perso('Batman', 100, 80, 70, 50, 'prout');
  perso2 = new Perso('Joker', 100, 60, 80, 60, 'prout');
  interval = 15;

  // ------------ lancement de test ----------
  ngOnInit() {  
    this.test();
  }

  test() {
    // ------------ timer perso 1 --------------
    this.timelinePerso1 = window.setInterval(() => {
      if (this.perso1.isAlive()) {
      this.perso1.punch(); 
      this.perso1.damage(this.perso2);
      this.perso2.showLife();
    }
    this.end1();
    }, this.interval * this.perso1.speed);

    // ----------- timer perso 2--------------
    this.timelinePerso2 = window.setInterval(() => {
      if (this.perso2.isAlive()) {
      this.perso2.punch();
      this.perso2.damage(this.perso1);
      this.perso1.showLife();
    }
    this.end2();
    }, this.interval * this.perso2.speed);
  }


  // --------------- fin des timer des persos -----------
  end1() {
    if (this.perso1.life <= 0) {
      clearInterval(this.timelinePerso1);
      clearInterval(this.timelinePerso2);
    } 
  }
  end2() {
    if (this.perso2.life <= 0) {
      clearInterval(this.timelinePerso1);
      clearInterval(this.timelinePerso2);
    }
  }


}

