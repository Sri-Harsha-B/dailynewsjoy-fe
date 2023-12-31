import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { FirstFourLinesPipe } from './pipes/FirstFourlines.pipe';
import { NewsService } from './service/news.service';
import { HttpClientModule } from '@angular/common/http';
import { PostNewsComponent } from './post-news/post-news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsCardComponent } from './home/news-card/news-card.component'

@NgModule({
  declarations: [
    HomeComponent,
    FirstFourLinesPipe,
    PostNewsComponent,
    NewsViewComponent,
    NewsCardComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent],
  providers: [NewsService]
})
export class FeatureModule { }
