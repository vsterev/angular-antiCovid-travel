import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() lat = 45.583290;
  @Input() lng = 16.321874;
  @Input() zoom = 4;
  @Output() coordinates: EventEmitter<{ lat: string, lng: string }> = new EventEmitter();
  // @Output() selectCause:
  infoWindow: any;
  // coordinates?: { lat: string, lng: string };
  constructor() { }
  ngOnInit(): void {
  }
  addLocation($event: MouseEvent): void {
    console.log($event)
  }
  onMapReady(map: any): void {
    map.addListener('click', (e: any) => {
      this.infoWindow = new google.maps.InfoWindow({
        position: e.latLng
      });
      this.lat = JSON.parse(JSON.stringify(e.latLng.toJSON(), null, 2)).lat;
      this.lng = JSON.parse(JSON.stringify(e.latLng.toJSON(), null, 2)).lng;
      const clickedCoordinates = JSON.parse(JSON.stringify(e.latLng.toJSON(), null, 2));
      this.coordinates.emit(clickedCoordinates);
    });
    console.log(this.infoWindow)
  }
}
