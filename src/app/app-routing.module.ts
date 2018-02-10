import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NewPostComponent} from './components/new-post/new-post.component';
import {PostComponent} from './components/post/post.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new-post', component: NewPostComponent},
  {path: 'posts/:id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
