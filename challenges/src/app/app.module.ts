import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { router } from './app.router';
import { SolutionsModule } from './solutions/solutions.module';
//import { solutionsRouter } from './solutions/solutions.router';

import { AppComponent } from './app.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { AjaxPeopleListComponent } from './ajax/ajax-people-list.component';
import { PeopleListComponent } from './composition/people-list.component';
import { ObservableComponent } from './observable/observable.component';
import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './not-found.component';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { LazyLoadingMainModule } from './solutions/lazyloading/lazy-loading-main.module';
import { PersonDetailComponent } from './composition/person-detail.component';

@NgModule({
  declarations: [
    AjaxPeopleListComponent,
    AppComponent,
    FormsDemoComponent,
    PeopleListComponent,
    ObservableComponent,
    WelcomeComponent,
    NotFoundComponent,
    BuiltInDirectivesComponent,
    PersonDetailComponent,
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
