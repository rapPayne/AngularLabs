import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { solutionsRouter } from "./solutions.router";
import { LazyLoadingMainModule } from './lazyloading/lazy-loading-main.module';

import { AjaxPeopleListComponent } from './ajax/ajax-people-list.component';
import { ObservableComponent } from './observable/observable.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { PeopleListComponent } from './composition/people-list.component';
import { PersonComponent } from './composition/person.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { CustomValidatorDirectiveComponent } from './custom-validator-directive/custom-validator-directive.component';
import { BorderHoverDirective } from './custom-directives/border-hover.directive';
import { QuerystringsComponent } from './querystrings/querystrings.component';
import { SSNValidatorDirective } from './custom-validator-directive/ssn-validator';
//import { LazyLoadingMainComponent } from './lazy-loading/lazy-loading-main.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    solutionsRouter,
    LazyLoadingMainModule
  ],
  declarations: [
    FormsDemoComponent,
    PeopleListComponent,
    PersonComponent,
    AjaxPeopleListComponent,
    ObservableComponent,
    CustomDirectivesComponent,
    CustomValidatorDirectiveComponent,
    BorderHoverDirective,
    QuerystringsComponent,
    SSNValidatorDirective
    //LazyLoadingMainComponent,
  ],
  exports: [

  ],
})
export class SolutionsModule { }
