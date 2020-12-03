import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationsDetailsThreePage } from './recommendations-details-three.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendationsDetailsThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendationsDetailsThreePageRoutingModule {}
