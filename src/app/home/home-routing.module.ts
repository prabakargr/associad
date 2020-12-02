import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupOnePage } from '../signup-one/signup-one.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'/signup_one',
    component:SignupOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
