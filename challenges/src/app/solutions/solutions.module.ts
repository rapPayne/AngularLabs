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
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { BorderHoverDirective } from './custom-directives/border-hover.directive';
//import { LazyLoadingMainComponent } from './lazy-loading/lazy-loading-main.component';

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
    CustomDirectivesComponent,
    BorderHoverDirective
    //LazyLoadingMainComponent,
  ],
  exports: [

  ],
})
export class SolutionsModule { }
