import { Injectable } from '@angular/core';
import { ConnectConfig, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as Config from '../../../assets/api-config.json';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  config = Config;

  constructor(private http: HttpClient) { }

  searchByTag(searchTerm: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.append('searchTerm', searchTerm);

    return this.http.get(this.config.searchUrl, { params });
  }
}
