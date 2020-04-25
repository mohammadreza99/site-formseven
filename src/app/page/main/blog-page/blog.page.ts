import { Component, OnInit } from '@angular/core';
import { Post } from '../../../model/post';
import { PostService } from '../../../service/post.service';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blog-page',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss']
})
export class BlogPage implements OnInit {

  constructor(router: Router, title: Title, route: ActivatedRoute, private postService: PostService) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }

  posts: Post[] = [];
  recentPosts: Post[] = [];
  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.recentPosts = this.postService.getRecentPosts();
  }
}
