import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AccueilComponent } from './accueil/accueil.component';
import { PageSelectionCharactersComponent } from './page-selection-characters/page-selection-characters.component';
import { RecapComponent } from './recap/recap.component';
import { PageFightComponent } from './page-fight/page-fight.component';
import { PageWinnerComponent } from './page-winner/page-winner.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PageSelectionCharactersComponent,
    RecapComponent,
    PageFightComponent,
    PageWinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
