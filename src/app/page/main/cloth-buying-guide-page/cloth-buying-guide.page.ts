import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'cloth-buying-guide-page',
  templateUrl: './cloth-buying-guide.page.html',
  styleUrls: ['./cloth-buying-guide.page.scss']
})
export class ClothBuyingGuidePage implements OnInit {

  constructor(router: Router, route: ActivatedRoute, title: Title) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }

  ngOnInit() {
  }

}
