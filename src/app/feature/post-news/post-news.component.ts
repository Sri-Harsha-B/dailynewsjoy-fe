import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.scss']
})
export class PostNewsComponent implements OnInit {


  newsForm!: FormGroup;
  postNewsLoading!: boolean;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsForm = this.createNewsForm();
  }

  createNewsForm(): FormGroup {
    return new FormGroup({
      titleControl: new FormControl('', Validators.required),
      imageControl: new FormControl('', Validators.required),
      newsBodyControl: new FormControl('', Validators.required),
    })
  }

  postNews() {
    this.postNewsLoading = true;
    if (this.newsForm.valid) {
      let news = {
        "title": this.newsForm.controls['titleControl'].value,
        "image": this.newsForm.controls['imageControl'].value,
        "body": this.newsForm.controls['newsBodyControl'].value
      }

      this.newsService.saveNews(news).subscribe(response => {
        console.log(response.body);
        this.postNewsLoading = false;
      })
    }
    else{
      this.postNewsLoading = false;
    }
  }
}
