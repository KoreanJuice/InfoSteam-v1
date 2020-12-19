// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Pages components
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { HelpComponent } from './pages/help/help.component';
import { LegalComponent } from './pages/legal/legal.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
  },
  {
    path: 'game/:id',
    component: GameDetailComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
  {
    path: 'legal',
    component: LegalComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
