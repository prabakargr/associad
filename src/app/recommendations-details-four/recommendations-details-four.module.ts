import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendationsDetailsFourPageRoutingModule } from './recommendations-details-four-routing.module';

import { RecommendationsDetailsFourPage } from './recommendations-details-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendationsDetailsFourPageRoutingModule
  ],
  declarations: [RecommendationsDetailsFourPage]
})
export class RecommendationsDetailsFourPageModule {}
