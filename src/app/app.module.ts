import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageSelectionCharactersComponent } from './page-selection-characters/page-selection-characters.component';

import { AccueilComponent } from './accueil/accueil.component';
import { PageFightComponent } from './page-fight/page-fight.component';
import { RecapComponent } from './recap/recap.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgressBarComponent } from './tools/progress-bar/progress-bar.component';
import { TimelineFightComponent } from './tools/timeline-fight/timeline-fight.component';
import { FooterComponent } from './footer/footer.component';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 4e1f1e3237424dfbb521f263e1dcf7f6670c08db

@NgModule({
  declarations: [
    AppComponent,
    PageSelectionCharactersComponent,
    AccueilComponent,
    PageFightComponent,
    RecapComponent,
    ProgressBarComponent,
    TimelineFightComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatProgressBarModule
=======
    HttpClientModule
>>>>>>> 4e1f1e3237424dfbb521f263e1dcf7f6670c08db
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
