import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list.component';
import { PersonComponent } from './person.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
