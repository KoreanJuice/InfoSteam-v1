// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { material } from './shared/material/material';
// Pages components
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { UserComponent } from './pages/user/user.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { PriceTrackerComponent } from './pages/price-tracker/price-tracker.component';
import { LegalComponent } from './pages/legal/legal.component';
import { HelpComponent } from './pages/help/help.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
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
    GameDetailComponent,
    UserDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...material,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
