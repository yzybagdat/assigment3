import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewOnTheSiteComponent } from './new-on-the-site/new-on-the-site.component';
import { LatestUpdatesComponent } from './latest-updates/latest-updates.component';
import { WeRecULookComponent } from './we-rec-u-look/we-rec-u-look.component';
import { SearchCatalogComponent } from './search-catalog/search-catalog.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AnimeDataComponent } from './anime-data/anime-data.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewOnTheSiteComponent,
    LatestUpdatesComponent,
    WeRecULookComponent,
    SearchCatalogComponent,
    FeedbackComponent,
    AnimeDataComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
