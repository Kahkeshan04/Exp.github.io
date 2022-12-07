import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SupriseComponent } from './Editor/suprise/suprise.component';

const routes: Routes = [
  {path : '', component :AppComponent},
  {path : 'suprise', component : SupriseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
