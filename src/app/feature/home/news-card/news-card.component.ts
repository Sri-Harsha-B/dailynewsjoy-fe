import { Component, Input } from '@angular/core';
import { NewsTransferSerice } from '../../service/news-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})

export class NewsCardComponent {
  @Input() news!: any[];
  constructor(private readonly newsTransfer: NewsTransferSerice, private readonly router: Router) { }
  goToNews(result: any) {

    this.newsTransfer.setData(result);
    this.router.navigate(['/article'])
  }

}
