import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../model/post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }
  ngOnInit() { }
  @Input() post: Post;
}
