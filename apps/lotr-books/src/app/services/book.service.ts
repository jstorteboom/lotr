import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult } from '../models/api-result.model';
import { BookListItem } from '../models/book-list-item.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://the-one-api.dev/v2/';
  private apiKey = '9gvz6TIvvcEyluNrBAES';

  constructor(private httpClient: HttpClient) {
    this.apiUrl += 'book'
  }

  getBooks(): Observable<BookListItem[]> {
    const options = { headers: { 'Authorization': `Bearer ${this.apiKey}` } };
    return this.httpClient.get<ApiResult<BookListItem>>(this.apiUrl, options).pipe(
      map(result => result.docs ?? [])
    );
  }
}
