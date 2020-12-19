// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { material } from './shared/material/material';
// Pages components
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { LegalComponent } from './pages/legal/legal.component';
import { HelpComponent } from './pages/help/help.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// Components
import { AppComponent } from './app.component';
import { GameNewsComponent } from './components/game-news/game-news.component';
import { MostPlayedGamesComponent } from './components/most-played-games/most-played-games.component';
import { RecommendedGamesComponent } from './components/recommended-games/recommended-games.component';
import { GameDataComponent } from './components/game-data/game-data.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { GameSearchComponent } from './components/game-search/game-search.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
// Pipes
import { ParseUserSearchPipe } from './shared/pipes/parse-user-search.pipe';
import { CleanSearchPipe } from './shared/pipes/clean-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MostPlayedGamesComponent,
    RecommendedGamesComponent,
    LegalComponent,
    HelpComponent,
    GameDataComponent,
    UserDataComponent,
    GameDetailComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    GameSearchComponent,
    UserSearchComponent,
    ParseUserSearchPipe,
    CleanSearchPipe,
    NewsComponent,
    GameNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...material,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
