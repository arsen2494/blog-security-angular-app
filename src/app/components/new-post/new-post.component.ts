import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private postService: PostService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

  get title(): AbstractControl {
    return this.form.get('title');
  }

  get description(): AbstractControl {
    return this.form.get('description');
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const observer = {
        next: (post: any) => {
          this.router.navigate(['/']);
        },
        error: err => console.log(err)
      };

      this.postService.add(this.form.value).subscribe(observer);
    }
  }
}
