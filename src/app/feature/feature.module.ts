import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { FirstFourLinesPipe } from './pipes/FirstFourlines.pipe';
import { NewsService } from './service/news.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    FirstFourLinesPipe
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [HomeComponent],
  providers: [NewsService]
})
export class FeatureModule { }
