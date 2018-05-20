import {Component, OnInit} from '@angular/core';
import {IPost} from '../../models/post';
import {IComment} from '../../models/comment';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post: IPost;
  public postId: string;
  public comments: Array<IComment>;
  public comment: string;

  constructor(private postService: PostService,
              route: ActivatedRoute,
              private commentService: CommentService) {
    this.postId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getPost();
    this.getComments();
  }

  private getPost(): void {
    const observer = {
      next: (post: IPost) => this.post = post,
      error: err => console.log(err)
    };

    this.postService.getPost(this.postId).subscribe(observer);
  }

  private getComments(): void {
    const observer = {
      next: (comments: IComment[]) => this.comments = comments,
      error: err => console.log(err)
    };

    this.commentService.getComments(this.postId).subscribe(observer);
  }

  public onComment(): void {
    if (this.comment.length) {
      const comment = {
        text: this.comment,
        postId: this.postId
      };
      const observer = {
        next: (newComment: IComment) => {
          this.comments = [...this.comments, newComment];
          this.comment = '';
        },
        error: err => console.log(err)
      };

      this.commentService.createComment(comment).subscribe(observer);
    }
  }
}
