import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }
  
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
      );
  }

  createNewPost(newPost: Post) {
    const date = new Date();
    newPost.created_at = date.toString();
    newPost.loveIts = 0;
    this.posts.push(newPost);
    this.savePosts();
	this.emitPosts();
    
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.savePosts();
    this.emitPosts();
  }

  saveLoveIts(index: number, value : number){
    this.posts[index].loveIts = value;
    this.savePosts();
    this.emitPosts();
  }


}