// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { material } from './shared/modules/material';
// Pages components
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { HelpComponent } from './pages/help/help.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// Components
import { AppComponent } from './app.component';
import { GameNewsComponent } from './components/game-news/game-news.component';
import { RecommendedGamesComponent } from './components/recommended-games/recommended-games.component';
import { GameSearchComponent } from './components/game-search/game-search.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { RecentGamesComponent } from './components/recent-games/recent-games.component';
// Pipes
import { SafeHtmlPipe } from './shared/pipes/safe-html.pipe';
import { ShortDecimalsPipe } from './shared/pipes/short-decimals.pipe';
import { ShowUTCTimePipe } from './shared/pipes/show-utc-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecommendedGamesComponent,
    HelpComponent,
    GameDetailComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    GameSearchComponent,
    UserSearchComponent,
    NewsComponent,
    GameNewsComponent,
    RecentGamesComponent,
    SafeHtmlPipe,
    ShortDecimalsPipe,
    ShowUTCTimePipe,
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
