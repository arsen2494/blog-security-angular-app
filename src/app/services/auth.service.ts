import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Config } from '../Config';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(user: any): Observable<any> { // TODO make model for user
    return this.http
    .post(`${Config.API_URL}/users/register`, user)
    .map((response: any) => response);
  }

}
