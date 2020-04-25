import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'complete-order-page',
  templateUrl: './complete-order.page.html',
  styleUrls: ['./complete-order.page.scss']
})
export class CompleteOrderPage implements OnInit {
  
  constructor(router: Router, route: ActivatedRoute, title: Title) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }

  ngOnInit() { }

}
