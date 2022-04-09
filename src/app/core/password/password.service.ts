import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private _loggedIn: boolean = false;
  public get loggedIn(): boolean {
    return this._loggedIn;
  }
  public set loggedIn(value: boolean) {
    this._loggedIn = value;
  }

  constructor() { }
}
