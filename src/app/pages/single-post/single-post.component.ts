import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  public post: Post;
  constructor(private _route: ActivatedRoute, private _postService: PostService) { 
    
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = +params['id'];
      this.getPost(id);
    })
  }
  public getPost(id: number) {
    this._postService.getPost(id).subscribe((data) => {
      this.post = data;
    })
  }

}
