import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routing } from './app.router';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './people/add-person.component';
import { PeopleComponent } from './people/people.component';
import { LandingComponent } from './landing/landing.component';
import { AboutUsComponent } from './other/about-us.component';
import { ContactUsComponent } from './other/contact-us.component';
import { PersonComponent } from './people/person.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    PeopleComponent,
    LandingComponent,
    AboutUsComponent,
    ContactUsComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
