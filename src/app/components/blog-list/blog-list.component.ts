import { Component, OnInit, OnDestroy } from '@angular/core';
import { IData } from '../_shared/datainterface';
import { Subscription } from 'rxjs';
import { DataService } from '../_shared/data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  errorMessage: string = '';
  sub: Subscription | any;

  posts: IData[] = [];

  constructor(private dataService : DataService) { }
  ngOnInit(): void {
    this.sub = this.dataService.getPosts().subscribe({
      next: posts => {
        this.posts = posts;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

 
}

 // ngOnInit(): void {
   // this.http.get('https://techcrunch.com/wp-json/wp/v2/posts')
    //.subscribe(Response => {
     // if(Response){ 
       // hideloader();
      //}
     // console.log(Response)
     // this.blog=Response;
     // this.list=this.blog.list;
   // });
    //function hideloader(){
    //  document.getElementById('loading').style.display = 'none';}
    //}
  


