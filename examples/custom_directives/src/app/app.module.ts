import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditableDirective } from './highlight-hover.directive';
import { RotatableDirective } from './rotatable.directive';
import { TableizeDirective } from './tableize.directive';

@NgModule({
  declarations: [
    AppComponent,
    EditableDirective,
    RotatableDirective,
    TableizeDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
