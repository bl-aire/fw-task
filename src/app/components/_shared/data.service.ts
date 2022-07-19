import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError} from 'rxjs/operators';
import { IData } from './datainterface'

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private endpoint = 'https://techcrunch.com/wp-json/wp/v2/posts';

  private paginationEndpoint = 'https://techcrunch.com/wp-json/wp/v2/posts?per_page=6';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IData[]>{
    return this.http.get<IData[]>(this.paginationEndpoint).pipe(tap(data => console.log('All', JSON.stringify(data))),
    catchError(this.handleError)
    );
  }

  getSinglePost(id: string) {
    const url = `${this.endpoint}/${id}`
    return this.http.get(url).pipe(catchError(this.handleError))
  }

  getHero() {
    const url = 'https://techcrunch.com/wp-json/wp/v2/posts/2355299'
    return this.http.get(url).pipe(tap(data => console.log('All', JSON.stringify(data))),
    catchError(this.handleError)
    );
  }

  getMore() {
    const url = 'https://techcrunch.com/wp-json/wp/v2/posts?per_page=3'
    return this.http.get(url).pipe(tap(data => console.log('All', JSON.stringify(data))),
    catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}



