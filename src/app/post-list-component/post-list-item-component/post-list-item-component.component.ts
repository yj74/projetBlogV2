import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent  {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIt: number;
  @Input() postCreated_at: string;
  @Input() postIndex: number;


  constructor(private postsService: PostsService) { }


  getPostTile() {
    return this.postTitle;
  }

  getPostContent() {
    return this.postContent;
  }

  onBtnSuccess () {
    this.postLoveIt++;
    this.saveLoveIts();
  }

  onBtnDanger () {
    this.postLoveIt--;
    this.saveLoveIts();
  }

  private saveLoveIts(){
    this.postsService.saveLoveIts(this.postIndex, this.getPostLoveIt());
  }

  getPostLoveIt () {
    return this.postLoveIt;
  }

  getPostCreated_at () {
    return this.postCreated_at;
  }

  onDeletePost() {
    this.postsService.removePost(this.postIndex);
  }
}

