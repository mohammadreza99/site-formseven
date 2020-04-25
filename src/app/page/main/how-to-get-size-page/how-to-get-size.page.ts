import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'how-to-get-size-page',
  templateUrl: './how-to-get-size.page.html',
  styleUrls: ['./how-to-get-size.page.scss']
})
export class HowToGetSizePage implements OnInit {

  constructor(router: Router, route: ActivatedRoute, title: Title) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }
  ngOnInit() {
  }

}
