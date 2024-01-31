import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/header/header.component';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { SignupComponent } from './_components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './_interceptors/http.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { MenuListComponent } from './_components/menu-list/menu-list.component';
import { FooterComponent } from './_components/footer/footer.component';
import { TopbarComponent } from './_components/topbar/topbar.component';
import { HeroComponent } from './_components/hero/hero.component';
import { AboutSectionComponent } from './_components/about-section/about-section.component';
import { WhyusSectionComponent } from './_components/whyus-section/whyus-section.component';
import { MenuSectionComponent } from './_components/menu-section/menu-section.component';
import { SpecialsSectionComponent } from './_components/specials-section/specials-section.component';
import { EventsSectionComponent } from './_components/events-section/events-section.component';
import { BookingSectionComponent } from './_components/booking-section/booking-section.component';
import { TestimonialsSectionComponent } from './_components/testimonials-section/testimonials-section.component';
import { GallerySectionComponent } from './_components/gallery-section/gallery-section.component';
import { ChefsSectionComponent } from './_components/chefs-section/chefs-section.component';
import { ContactSectionComponent } from './_components/contact-section/contact-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MenuListComponent,
    FooterComponent,
    TopbarComponent,
    HeroComponent,
    AboutSectionComponent,
    WhyusSectionComponent,
    MenuSectionComponent,
    SpecialsSectionComponent,
    EventsSectionComponent,
    BookingSectionComponent,
    TestimonialsSectionComponent,
    GallerySectionComponent,
    ChefsSectionComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
