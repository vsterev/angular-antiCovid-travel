import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() lat = 45.583290;
  @Input() lng = 16.321874;
  @Input() zoom = 4;
  @Input() hasMarker = false;
  @Output() coordinates: EventEmitter<{ lat: string, lng: string }> = new EventEmitter();
  // @Output() selectCause:
  infoWindow: any;
  // coordinates?: { lat: string, lng: string };
  constructor() { }
  // ngAfterContentChecked(): void {
  //   console.log(this.lat, 'after');
  // if (this.lat === 0 && this.lng === 0) {
  //   this.lat = 45.583290;
  //   this.lng = 16.321874;
  //   this.hasMarker = false;
  //   this.zoom = 6;
  // }
  ngOnInit(): void {
    // console.log(this.lat, 'onInit');
    // if (this.lat === 0 && this.lng === 0) {
    //   this.lat = 45.583290;
    //   this.lng = 16.321874;
    //   this.hasMarker = false;
    //   this.zoom = 6;
    // }
  }
  onMapReady(map: any): void {
    map.addListener('click', (e: any) => {
      this.infoWindow = new google.maps.InfoWindow({
        position: e.latLng
      });
      if (!this.hasMarker) {
        this.hasMarker = true;
      }
      const clickedCoordinates = JSON.parse(JSON.stringify(e.latLng.toJSON(), null, 2));
      this.lat = clickedCoordinates.lat;
      this.lng = clickedCoordinates.lng;
      this.coordinates.emit(clickedCoordinates);
    });
  }
}
