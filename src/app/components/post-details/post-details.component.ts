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

  //post: any[] = [];

  errorMessage: string = '';
  singlePost: any;
  moreArticles: any;
  id!: string;
  sub: Subscription | any;
  posts: IData[] = [];
  
  //sub: Subscription | any;

  timePublished: string = "2 Months ago"
  totalReadTime: string = "12 Min Read"
  articles: any;

  constructor(private spinner: NgxSpinnerService, private dataService : DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getSinglePost()
    

    this.sub = this.dataService.getMore().subscribe({
      next: articles => {
        this.articles = articles;
        setTimeout(() => {
          this.spinner.hide();
        }, 3000);
      },
      error: err => this.errorMessage = err
    });
  }
  getMore() {
    throw new Error('Method not implemented.');
  }

  getSinglePost(){
    this.spinner.show()
    this.dataService.getSinglePost(this.id).subscribe(
      (data) => {
        this.singlePost = data;
        this.spinner.hide();
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
