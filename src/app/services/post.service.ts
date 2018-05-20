import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IPost} from '../models/post';
import {Config} from '../Config';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<IPost[]> {
    return this.http
      .get(`${Config.API_URL}/posts`)
      .map((posts: IPost[]) => posts);
  }

  public getPost(id: string): Observable<IPost> {
    return this.http
      .get(`${Config.API_URL}/posts/${id}`)
      .map((post: IPost) => post);
  }

  public add(post: IPost): Observable<IPost> {
    return this.http
      .post(`${Config.API_URL}/posts`, post)
      .map((createdPost: IPost) => createdPost);
  }
}
