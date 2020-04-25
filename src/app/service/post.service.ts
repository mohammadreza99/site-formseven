import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../model/post';

@Injectable()
export class PostService {

  constructor(private _http: HttpClient) { }
  posts = new Array<Post>();
  recentIds: string[] = [];
  loadPosts() {
    // return this._http.get('https://tamclub.me/manto7/getAllPosts.php').subscribe((posts: Post[]) => {
    //   this.posts = posts;
    // });
    return this._http.get<Post[]>('/assets/posts.json').subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  getPosts() {
    return this.posts;
  }

  getPost(id) {
    return this.posts.find((post) => post.id == id);
  }

  getRecentPosts() {
    let recentPosts: Post[] = [];
    for (let i = 0; i < this.recentIds.length; i++)
      recentPosts.push(this.getPost(this.recentIds[i]));
    return recentPosts;
  }
}
