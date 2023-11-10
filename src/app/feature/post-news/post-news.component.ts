import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.scss']
})
export class PostNewsComponent implements OnInit {


  newsForm!: FormGroup;

  constructor() { }

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

}
