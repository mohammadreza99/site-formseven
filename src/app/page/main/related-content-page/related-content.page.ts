import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'related-content-page',
  templateUrl: './related-content.page.html',
  styleUrls: ['./related-content.page.scss']
})
export class RelatedContentPage implements OnInit {

  constructor(router: Router, title: Title, route: ActivatedRoute) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }

  ngOnInit() {
  }

}
