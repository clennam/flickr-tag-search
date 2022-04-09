import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as Config from '../../../assets/api-config.json';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  config = Config;

  private _loggedIn: boolean = false;
  public get loggedIn(): boolean {
    return this._loggedIn;
  }
  public set loggedIn(value: boolean) {
    this._loggedIn = value;
  }

  constructor(private http: HttpClient) { }

  checkPassword(password: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const body = new URLSearchParams();
    body.set('plainPassword', password);

    return this.http.post(this.config.checkHashUrl, body, options);
  }
}
