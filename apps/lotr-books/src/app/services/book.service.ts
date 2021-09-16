import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult } from '../models/api-result.model';
import { BookListItem } from '../models/book-list-item.model';
import { map } from 'rxjs/operators'
import { SettingsService } from '@lens/core/lib';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl!: string;

  constructor(
    private settings: SettingsService,
    private httpClient: HttpClient) {
    this.apiUrl = `${settings.getValue('apiUrl')}book`;
  }

  getBooks(): Observable<BookListItem[]> {
    return this.httpClient.get<ApiResult<BookListItem>>(this.apiUrl).pipe(
      map(result => result.docs ?? [])
    );
  }
}
