import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageSelectionCharactersComponent } from './page-selection-characters/page-selection-characters.component';

import { AccueilComponent } from './accueil/accueil.component';
import { PageFightComponent } from './page-fight/page-fight.component';

@NgModule({
  declarations: [
    AppComponent,
    PageSelectionCharactersComponent,
    AccueilComponent,
    PageFightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
