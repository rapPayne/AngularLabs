import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { router } from './app.router';

import { AppComponent } from './app.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { AjaxPeopleListComponent } from './ajax/ajax-people-list.component';
import { PeopleListComponent } from './composition/people-list.component';
import { PersonComponent } from './composition/person.component';
import { ObservableComponent } from './observable/observable.component';
import { PeopleService } from './people.service';
import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AjaxPeopleListComponent,
    AppComponent,
    FormsDemoComponent,
    PeopleListComponent,
    PersonComponent,
    ObservableComponent,
    WelcomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
