import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IPost } from "../../models/post";
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public displayedColumns = ['number', 'title', 'description', 'action'];
  public posts: Array<IPost>;
  public dataSource: MatTableDataSource<any>;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  public applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  private getPosts(): void {
    const observer = {
      next: (posts: IPost[]) => {
        this.posts = posts;
        this.dataSource = new MatTableDataSource(this.posts);
      },
      error: err => console.log(err)
    };

    this.postService.getAll().subscribe(observer);
  }

}
