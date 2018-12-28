import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTweetsComponent } from './layouts/all-tweets/all-tweets.component';

const routes: Routes = [
  { path: '', component: AllTweetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
