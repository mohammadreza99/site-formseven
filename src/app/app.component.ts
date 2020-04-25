import { Component, OnInit } from '@angular/core';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private postService: PostService) {
  }
  ngOnInit() {
    this.postService.loadPosts();
  }
}
