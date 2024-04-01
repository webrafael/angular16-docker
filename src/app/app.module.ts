import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTemplateComponent } from './views/templates/main-template/main-template.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    MainTemplateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
