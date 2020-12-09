// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Pages components
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { GameComponent } from './pages/game/game.component';
import { PriceTrackerComponent } from './pages/price-tracker/price-tracker.component';
import { HelpComponent } from './pages/help/help.component';
import { LegalComponent } from './pages/legal/legal.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user/:id',
    component: UserComponent,
  },
  {
    path: 'game/:id',
    component: GameComponent,
  },
  {
    path: 'price-tracker',
    component: PriceTrackerComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
  {
    path: 'legal',
    component: LegalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
