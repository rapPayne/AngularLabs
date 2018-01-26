import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { router } from './app.router';
import { SolutionsModule } from './solutions/solutions.module';
//import { solutionsRouter } from './solutions/solutions.router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './not-found.component';
import { LazyLoadingMainModule } from './solutions/lazyloading/lazy-loading-main.module';
import { PeopleListComponent } from './demonstrations/people-list.component';
import { PersonComponent } from './demonstrations/person.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotFoundComponent,
    PeopleListComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SolutionsModule,
    //solutionsRouter,
    router,
    //LazyLoadingMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
