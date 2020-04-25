import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'not-found-page',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss']
})
export class NotFoundPage implements OnInit {

  constructor(router: Router, route: ActivatedRoute, title: Title) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }
  ngOnInit() { }

}
