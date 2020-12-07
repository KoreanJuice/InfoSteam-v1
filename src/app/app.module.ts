// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { AppComponent } from './app.component';
import { AngularHelpComponent } from './components/angular-help/angular-help.component';
import { XyzComponent } from './components/xyz/xyz.component';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { material } from './shared/material/material';

@NgModule({
  declarations: [
    AppComponent,
    AngularHelpComponent,
    XyzComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...material,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
