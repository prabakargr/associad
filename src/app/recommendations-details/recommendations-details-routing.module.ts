import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationsDetailsPage } from './recommendations-details.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendationsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendationsDetailsPageRoutingModule {}
