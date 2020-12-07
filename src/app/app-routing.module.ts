// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { AngularHelpComponent } from './components/angular-help/angular-help.component';
import { XyzComponent } from './components/xyz/xyz.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'help',
        component: AngularHelpComponent,
      },
      {
        path: 'xyz',
        component: XyzComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
