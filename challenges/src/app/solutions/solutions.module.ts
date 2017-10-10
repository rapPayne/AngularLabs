import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { solutionsRouter } from "./solutions.router";
import { AjaxPeopleListComponent } from './ajax/ajax-people-list.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { PeopleListComponent } from './composition/people-list.component';
import { PersonComponent } from './composition/person.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    solutionsRouter
  ],
  declarations: [
    AjaxPeopleListComponent,
    FormsDemoComponent,
    PeopleListComponent,
    PersonComponent,
    ObservableComponent,
  ],
  exports: [

  ],
})
export class SolutionsModule { }
