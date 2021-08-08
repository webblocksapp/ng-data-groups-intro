import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgDataGroupsModule } from '@webblocksapp/ng-data-groups';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { NgBs4FormComponentsModule } from '@webblocksapp/ng-bs4-form-components';

@NgModule({
  declarations: [AppComponent, RegistrationFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDataGroupsModule,
    NgBs4FormComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
