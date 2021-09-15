import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResult } from '../../../models';
import { SettingsService } from '../../../services/settings.service';
import { CharacterListItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  
  private apiUrl!: string;

  constructor(
    settings: SettingsService,
    private httpClient: HttpClient) {
    this.apiUrl = `${settings.getValue('apiUrl')}character`;
  }

  getCharacters(): Observable<CharacterListItem[]> {
    return this.httpClient.get<ApiResult<CharacterListItem>>(this.apiUrl).pipe(
      map(result => result.docs ?? [])
    );
  }

  getCharacter(id: string): Observable<CharacterListItem> {
    return this.httpClient.get<ApiResult<CharacterListItem>>(`${this.apiUrl}/${id}`).pipe(
      map(result => result.docs ? result.docs[0] : <CharacterListItem>{})
    );
  }
}