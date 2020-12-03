import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendationsDetailsThreePageRoutingModule } from './recommendations-details-three-routing.module';

import { RecommendationsDetailsThreePage } from './recommendations-details-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendationsDetailsThreePageRoutingModule
  ],
  declarations: [RecommendationsDetailsThreePage]
})
export class RecommendationsDetailsThreePageModule {}
