import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'star-rate',
  templateUrl: './star-rate.component.html',
  styleUrls: ['./star-rate.component.scss']
})

export class StarRateComponent implements OnInit, OnChanges {
  constructor() { }
  ngOnInit() { }
  
  @Input() rating: number;
  width: number;
  
  ngOnChanges() {
    this.width = this.rating * 24;
  }
}
