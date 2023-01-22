import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AccueilComponent } from './accueil/accueil.component';
import { PageSelectionCharactersComponent } from './page-selection-characters/page-selection-characters.component';
import { RecapComponent } from './recap/recap.component';

import { PageFightComponent } from './page-fight/page-fight.component';
import { PageWinnerComponent } from './page-winner/page-winner.component';
=======
import { FinComponent } from './fin/fin.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgressBarComponent } from './tools/progress-bar/progress-bar.component';
import { TimelineFightComponent } from './tools/timeline-fight/timeline-fight.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PageSelectionCharactersComponent,
    RecapComponent,
    PageFightComponent,

    PageWinnerComponent

    RecapComponent,
    FinComponent,
    ProgressBarComponent,
    TimelineFightComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
