import { Component, Input } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar'; 



@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  color: string = 'red';
  value: number = 80;
  
}
