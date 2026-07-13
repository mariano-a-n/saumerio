import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrewerySaumerios } from './brewery-saumerios/brewery-saumerios';
import { BreweryAbout } from './brewery-about/brewery-about';

const routes: Routes = [
  {path : '' , redirectTo : 'saumerios', pathMatch : 'full'},
  {path : 'saumerios', component : BrewerySaumerios},
  {path : 'about', component : BreweryAbout},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
