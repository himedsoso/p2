import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PageFightComponent } from './page-fight/page-fight.component';
import { PageSelectionCharactersComponent } from './page-selection-characters/page-selection-characters.component';
import { RecapComponent } from './recap/recap.component';
import { PageWinnerComponent } from './page-winner/page-winner.component';

const routes: Routes = [
  {
    path: '', component: AccueilComponent
  },
  {
    path: 'accueil', component: AccueilComponent

  },
  {
    path: 'selection-perso', component: PageSelectionCharactersComponent
  },
  {
    path: 'fight', component: PageFightComponent

  },
  {
    path: 'recap', component: RecapComponent
  },
  {
    path: 'winner', component: PageWinnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
