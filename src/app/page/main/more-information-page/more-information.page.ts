import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'more-information',
  templateUrl: './more-information.page.html',
  styleUrls: ['./more-information.page.scss']
})
export class MoreInformationPage implements OnInit {

  constructor(router: Router, route: ActivatedRoute, title: Title) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }
  ngOnInit() {
  }

}
