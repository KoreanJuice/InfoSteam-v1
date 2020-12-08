// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { material } from './shared/material/material';
// Components
import { AppComponent } from './app.component';
import { AngularHelpComponent } from './components/angular-help/angular-help.component';
import { PriceTrackerComponent } from './components/price-tracker/price-tracker.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularHelpComponent,
    PriceTrackerComponent,
    SearchComponent,
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
