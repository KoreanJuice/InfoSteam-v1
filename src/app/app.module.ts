// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { material } from './shared/material/material';
// Pages components
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { UserComponent } from './pages/user/user.component';
import { PriceTrackerComponent } from './pages/price-tracker/price-tracker.component';
import { LegalComponent } from './pages/legal/legal.component';
import { HelpComponent } from './pages/help/help.component';
// Components
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { MostPlayedGamesComponent } from './components/most-played-games/most-played-games.component';
import { RecommendedGamesComponent } from './components/recommended-games/recommended-games.component';
import { GameDataComponent } from './components/game-data/game-data.component';
import { UserDataComponent } from './components/user-data/user-data.component';
// Pipes
import { ParseSearchPipe } from './shared/pipes/parse-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PriceTrackerComponent,
    SearchComponent,
    HomeComponent,
    GameComponent,
    UserComponent,
    MostPlayedGamesComponent,
    RecommendedGamesComponent,
    LegalComponent,
    HelpComponent,
    GameDataComponent,
    UserDataComponent,
    ParseSearchPipe,
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
