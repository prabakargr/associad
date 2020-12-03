import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationsDetailsFourPage } from './recommendations-details-four.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendationsDetailsFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendationsDetailsFourPageRoutingModule {}
