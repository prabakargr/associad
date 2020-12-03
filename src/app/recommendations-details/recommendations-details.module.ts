import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendationsDetailsPageRoutingModule } from './recommendations-details-routing.module';

import { RecommendationsDetailsPage } from './recommendations-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendationsDetailsPageRoutingModule
  ],
  declarations: [RecommendationsDetailsPage]
})
export class RecommendationsDetailsPageModule {}
