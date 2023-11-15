import { Component, OnInit } from '@angular/core';
import { NewsTransferSerice } from '../service/news-transfer.service';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {
  news!: any;

  constructor(private readonly newsTrasfer: NewsTransferSerice) { }

  ngOnInit(): void {
    this.news = this.newsTrasfer.getData();

  }


}
