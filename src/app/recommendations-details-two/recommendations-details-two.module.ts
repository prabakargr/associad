import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendationsDetailsTwoPageRoutingModule } from './recommendations-details-two-routing.module';

import { RecommendationsDetailsTwoPage } from './recommendations-details-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendationsDetailsTwoPageRoutingModule
  ],
  declarations: [RecommendationsDetailsTwoPage]
})
export class RecommendationsDetailsTwoPageModule {}
