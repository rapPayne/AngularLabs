import { RouterModule } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { CustomValidatorDirectiveComponent } from './custom-validator-directive/custom-validator-directive.component';
import { QuerystringsComponent } from './querystrings/querystrings.component';

const solutionsRoutes = [
  {path:"solutions/customDirectives", component: CustomDirectivesComponent},
  {path:"solutions/customValidator", component: CustomValidatorDirectiveComponent},
  {path:"solutions/observable", component: ObservableComponent},
  {path:"solutions/querystrings", component: QuerystringsComponent},
];
export const solutionsRouter = RouterModule.forChild(solutionsRoutes);