import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: any;
  dbArticles: any;

  isarticlesLoading: boolean = true;
  isDBArticlesLoading: boolean = true;

  constructor(private readonly newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      console.log(news.articles)
      this.articles = news.articles;
      this.isarticlesLoading = false;

    });

    this.newsService.getDBNews().subscribe(news => {
      console.log(news)
      this.dbArticles = news;
      this.isDBArticlesLoading = false;
    });
  }
}
