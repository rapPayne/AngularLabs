import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PeopleListComponent } from './people-list.component';
import { PersonComponent } from './person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PeopleListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
