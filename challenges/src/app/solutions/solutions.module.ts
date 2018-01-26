import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { solutionsRouter } from "./solutions.router";
import { LazyLoadingMainModule } from './lazyloading/lazy-loading-main.module';

import { ObservableComponent } from './observable/observable.component';
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
