import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollSpyDirective } from './scroll-spy.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { WorksListComponent } from './works-list/works-list.component';
import { FlipCardComponent } from './utils/flip-card/flip-card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialsComponent } from './socials/socials.component';

// Owl-Carousel
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlCarouselComponent } from './utils/owl-carousel/owl-carousel.component';
import { TeamComponent } from './team/team.component';
import { HoverCardComponent } from './utils/hover-card/hover-card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavComponent } from './nav/nav.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ScrollSpyDirective,
    HeaderComponent,
    WorksListComponent,
    FlipCardComponent,
    SocialsComponent,
    OwlCarouselComponent,
    TeamComponent,
    HoverCardComponent,
    ContactsComponent,
    NavComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
