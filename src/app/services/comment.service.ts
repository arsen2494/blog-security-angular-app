import {Injectable} from '@angular/core';
import {IComment} from '../models/comment';
import {HttpClient} from '@angular/common/http';
import {Config} from '../Config';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) {
  }

  public getComments(id?: string): Observable<Array<IComment>> {
    const query = id ? `?postId=${id}` : '';

    return this.http
      .get(`${Config.API_URL}/comments${query}`)
      .map((comments: IComment[]) => comments);
  }

  public createComment(comment: IComment): Observable<IComment> {
    return this.http
      .post(`${Config.API_URL}/comments`, comment)
      .map((comment: IComment) => comment);
  }

}
