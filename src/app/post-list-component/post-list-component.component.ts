import { Post } from './../models/post.model';
import { PostsService } from './../services/posts.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  onNewPost() {
    this.router.navigate(['/posts', 'new']);
  }


  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
