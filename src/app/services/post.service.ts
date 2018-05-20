import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Config} from '../Config';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<any[]> {
    return this.http
      .get(`${Config.API_URL}/posts`)
      .map((posts: any[]) => posts);
  }

  public getPost(id: string): Observable<any> {
    return this.http
      .get(`${Config.API_URL}/posts/${id}`)
      .map((post: any) => post);
  }

  public add(post: any): Observable<any> {
    return this.http
      .post(`${Config.API_URL}/posts`, post)
      .map((createdPost: any) => createdPost);
  }
}
