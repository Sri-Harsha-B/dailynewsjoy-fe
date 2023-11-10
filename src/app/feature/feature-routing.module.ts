import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostNewsComponent } from './post-news/post-news.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'post-news',
  component: PostNewsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
