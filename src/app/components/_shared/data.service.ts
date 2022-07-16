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

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IData[]>{
    return this.http.get<IData[]>(this.endpoint).pipe(tap(data => console.log('All', JSON.stringify(data))),
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



