import { Component } from '@angular/core';

@Component({
  selector: 'agm',
  templateUrl: 'agm.component.html',
  styleUrls: ['agm.component.scss'],
})
export class AgmComponent {
  directionX: number = 35.7352574;
  directionY: number = 51.4953606;
  lat:number= 35.7352574;
  lng: number = 51.4953606;

  placeMarker(event) {
    this.directionX = event.coords.lat;
    this.directionY = event.coords.lng;
  }
}