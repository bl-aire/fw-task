import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { IData } from '../_shared/datainterface';
import { DataService } from '../_shared/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  errorMessage: string = '';
  singlePost: any;
  moreArticles: any;
  id!: string;
  sub: Subscription | any;
  posts: IData[] = [];
  articles: any;
  
  timePublished: string = "2 Months ago"
  totalReadTime: string = "12 Min Read"

  constructor(private spinner: NgxSpinnerService, private dataService : DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getSinglePost()
    
    this.sub = this.dataService.getMore().subscribe({
      next: articles => {
        this.articles = articles;
        //setTimeout(() => {
          //this.spinner.hide();
        //}, 3000);
      },
      error: err => this.errorMessage = err
    });
  }

  getSinglePost(){
    this.dataService.getSinglePost(this.id).subscribe(
      (data) => {
        this.singlePost = data;
      },
      (error) => {
        this.errorMessage = error.message;
        this.spinner.hide();
      }
    );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
