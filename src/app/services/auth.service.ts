import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Config } from '../Config';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(user: any): Observable<any> {
    return this.http
    .post(`${Config.API_URL}/users/register?username=${user.username}&password=${user.password}&email=${user.email}`, user)
    .map((response: any) => response);
  }

}
