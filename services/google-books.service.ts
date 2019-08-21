import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  private readonly GET_BOOKS_URL: string;

  constructor(private _httpClient: HttpClient) {
    this.GET_BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes';
   }

   /**
    * This method get all books that conatins the str parameter from Google Books Api.
    */
  public getBooks = (str: string): Observable<any> => {
    // return this._httpClient.get(`${this.GET_BOOKS_URL}?q=${str}&max-results=40`).pipe(
      return this._httpClient.get('https://www.googleapis.com/books/v1/volumes?q=The&max-results=40&start-index=11').pipe(
      map((response) => {
        console.log(response);
        return response;
      }),
      debounceTime(500),
      catchError(err => {
        return observableThrowError(err);
      }),);
  }
}
