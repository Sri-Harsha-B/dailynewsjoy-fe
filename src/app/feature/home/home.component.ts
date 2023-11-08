import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: any;

  constructor(private readonly newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      console.log(news.articles)
      this.articles = news.articles;
    });
  }
}
