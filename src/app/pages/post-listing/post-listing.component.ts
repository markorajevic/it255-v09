import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss']
})
export class PostListingComponent{

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
