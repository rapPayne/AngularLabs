import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { solutionsRouter } from "./solutions.router";

import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { AjaxPeopleListComponent } from './ajax/ajax-people-list.component';
import { ObservableComponent } from './observable/observable.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { PeopleListComponent } from './composition/people-list.component';
import { PersonComponent } from './composition/person.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    solutionsRouter
  ],
  declarations: [
    BuiltInDirectivesComponent,
    FormsDemoComponent,
    PeopleListComponent,
    PersonComponent,
    AjaxPeopleListComponent,
    ObservableComponent,
  ],
  exports: [

  ],
})
export class SolutionsModule { }
