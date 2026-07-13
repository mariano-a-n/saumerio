import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SaumeriosList } from './saumerios-list/saumerios-list';
import { FormsModule } from '@angular/forms';
import { Carrito } from './carrito/carrito';
import { BreweryAbout } from './brewery-about/brewery-about';
import { BrewerySaumerios } from './brewery-saumerios/brewery-saumerios';
import { InputInteger } from './input-integer/input-integer';
// import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [App, SaumeriosList, Carrito, BreweryAbout, BrewerySaumerios, InputInteger],
  imports: [BrowserModule, AppRoutingModule, FormsModule,],
  providers: [provideBrowserGlobalErrorListeners(),provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
