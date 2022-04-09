import { Injectable } from '@angular/core';
import { ConnectConfig, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as Config from '../../../assets/api-config.json';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  config = Config;

  commonOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  searchByTag(searchTerm: string): Observable<any> {
    const headers = this.commonOptions.headers;

    let params: HttpParams = new HttpParams();
    params = params.append('tags', searchTerm)
      .append('tagmode', 'any')
      .append('format', 'json')
      .append('jsoncallback', 'JSONP_CALLBACK');

    // manually create url
    let fullUrl = `${this.config.searchUrl}?${params.toString()}`

    // can't use http.get because the flickr API gives CORS error
    // so use jsonp
    return this.http.jsonp(fullUrl, 'callback')
  }
}
