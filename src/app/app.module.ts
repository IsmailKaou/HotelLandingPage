import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './landing-page/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './landing-page/hero-section/hero-section.component';
import { AboutUsSectionComponent } from './landing-page/about-us-section/about-us-section.component';
import { OfferSectionComponent } from './landing-page/offer-section/offer-section.component';
import { OurSpacesSectionComponent } from './landing-page/our-spaces-section/our-spaces-section.component';
import { ContactUsSectionComponent } from './landing-page/contact-us-section/contact-us-section.component';
import { FooterSectionComponent } from './landing-page/footer-section/footer-section.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'confirmation', component: ConfirmationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent,
    HeroSectionComponent,
    AboutUsSectionComponent,
    OfferSectionComponent,
    OurSpacesSectionComponent,
    ContactUsSectionComponent,
    FooterSectionComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
