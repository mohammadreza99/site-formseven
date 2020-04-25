import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'representation-page',
  templateUrl: './representation.page.html',
  styleUrls: ['./representation.page.scss']
})
export class RepresentationPage implements OnInit {

  constructor(private router: Router, title: Title, private route: ActivatedRoute, public snackBar: MatSnackBar) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }
  name: string;
  phoneNumber: string;
  state: string;
  city: string;
  ngOnInit() { }
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required
  ]);
  cityFormControl = new FormControl('', [
    Validators.required,
  ]);
  stateFormControl = new FormControl('', [
    Validators.required,
  ]);

  onSubmit() {
    if ((this.name != '' && this.name != undefined && this.name != null) &&
      (this.phoneNumber != '' && this.phoneNumber != undefined && this.phoneNumber != null) &&
      (this.state != '' && this.state != undefined && this.state != null) &&
      (this.city != '' && this.city != undefined && this.city != null)) {
      this.snackBar.openFromComponent(SubmitComponent, {
        duration: 600,
      });
    }
  }
}

@Component({
  selector: 'submit',
  templateUrl: '../../../snack-bars/submit.html'
})
export class SubmitComponent { }
