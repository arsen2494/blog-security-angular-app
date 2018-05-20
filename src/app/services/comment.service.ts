import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../Config';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) {
  }

  public getComments(id?: string): Observable<Array<any>> {
    const query = id ? `?postId=${id}` : '';

    return this.http
      .get(`${Config.API_URL}/comments${query}`)
      .map((comments: any[]) => comments);
  }

  public createComment(comment: any): Observable<any> {
    return this.http
      .post(`${Config.API_URL}/comments`, comment)
      .map((createdComment: any) => createdComment);
  }

}
