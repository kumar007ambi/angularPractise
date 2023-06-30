import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlertsComponent } from './alerts/alerts.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DerivativesComponent } from './derivatives/derivatives.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertsComponent,
    SuccessAlertComponent,
    DataBindingComponent,
    DerivativesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
