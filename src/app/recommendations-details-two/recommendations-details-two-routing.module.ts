import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationsDetailsTwoPage } from './recommendations-details-two.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendationsDetailsTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendationsDetailsTwoPageRoutingModule {}
