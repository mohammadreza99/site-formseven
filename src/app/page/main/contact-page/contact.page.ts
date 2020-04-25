import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})

export class ContactPage implements OnInit {
  constructor(router: Router, route: ActivatedRoute, title: Title) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }
  ngOnInit() { }
  phoneFormControl = new FormControl('', [
    Validators.required
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  messageFormControl = new FormControl('', [
    Validators.required,
  ]);

}
