import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './models/post';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public postForm: FormGroup;
  public posts: Post[] = [];
  
  constructor(private _postService: PostService) { 
    this._postService.getPosts().subscribe((data) => {
      this.posts = data;
    })
    this.initForm();
  }

  public initForm() {
    this.postForm = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      userId: new FormControl(1, [
        Validators.required
      ]),
      body: new FormControl('', [
        Validators.required
      ])
    });
  }

  public submitForm() {
    let title = this.postForm.get('title').value;
    let userId = this.postForm.get('userId').value;
    let body = this.postForm.get('body').value;
    let post = new Post(userId, title,body, 0);
    this.createPost(post)
  }

  public getPost(id: number) {
    this._postService.getPost(id).subscribe((data) => {
      alert(JSON.stringify(data));
    })
  }

  public createPost(post: Post) {
    this._postService.createPost(post).subscribe((data) => {
      this.posts.unshift(data);
    })
  }

  public deletePost(id: number) {
    this._postService.deletePost(id).subscribe((data) => {
      this._removePostFromList(id);
      alert("Post je obrisan sa servera");
    })
  }

  private _removePostFromList(id: number) {
    let ind = this.posts.findIndex(post => post.id == id);
    this.posts.splice(ind, 1);
  }

}
