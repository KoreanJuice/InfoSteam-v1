// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { PriceTrackerComponent } from './components/price-tracker/price-tracker.component';
import { SearchComponent } from './components/search/search.component';
import { AngularHelpComponent } from './components/angular-help/angular-help.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: 'price-tracker',
    component: PriceTrackerComponent,
  },
  {
    path: 'help',
    component: AngularHelpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
