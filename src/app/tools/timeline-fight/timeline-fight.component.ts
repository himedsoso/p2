import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-fight',
  templateUrl: './timeline-fight.component.html',
  styleUrls: ['./timeline-fight.component.scss']
})
export class TimelineFightComponent implements OnInit{
  seconds: number = 0;
  milliSec: number = 0;

  setTimeLine() {
    this.milliSec += 1;
    if (this.milliSec == 10) {
      this.milliSec = 0;
      this.seconds++;
      console.log(this.seconds);
    }
  }

  ngOnInit(): void {
    this.start();
  }
  start() {
    let interval = 100;
    let chronoUp = setInterval(this.setTimeLine, interval);
  }

}
