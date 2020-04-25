import { Component, OnInit } from '@angular/core';
import { Post } from '../../../model/post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../../service/post.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'post-detail-page',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss']
})
export class PostDetailPage implements OnInit {

  constructor(router: Router, title: Title, private route: ActivatedRoute, private postService: PostService) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }
  
  post: Post;
  recentPosts: Post[] = []
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.post = this.postService.getPost(params['id']);
    });
    this.recentPosts = this.postService.getRecentPosts();
  }

}
