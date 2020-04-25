import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'about-page',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage implements OnInit {

  constructor(router: Router, route: ActivatedRoute, title: Title) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }

  ngOnInit() {
  }

}
