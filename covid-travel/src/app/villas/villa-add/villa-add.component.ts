import { IVilla } from './../../shared/interfaces/villa';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { VillaService } from '../villa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villa-add',
  templateUrl: './villa-add.component.html',
  styleUrls: ['./villa-add.component.css']
})
export class VillaAddComponent implements OnInit {

  constructor(private villaService: VillaService, private router: Router, private location: Location) { }
  goBack = false;
  errMsg = '';
  coordinates?: { lat: string, lng: string };
  // @Input() coordinates?: { lat: string, lng: string };
  ngOnInit(): void {
    this.goBack = history.state?.goBack || false;
  }
  submitHandler(val: {}): void {
    // console.log(val)
    const { name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3, lat, lng }: any = val;
    const villaInfo: any = {
      name, region, date, beds, nights, price, priceDescription, description,
      imageUrl, imageUrl2, imageUrl3, coordinates: { lat: this.coordinates?.lat, lng: this.coordinates?.lng }
    };
    console.log(villaInfo);
    // this.villaService.villaAdd(villaInfo)
    //   .subscribe((newVilla) => {
    //     console.log(newVilla);
    //     return this.router.navigate(['/home-auth']);
    //   }, (err) => {
    //     const arrErrerr: {
    //       message: string; name: string
    //     }[] = err.error.msg;
    //     this.errMsg = Object.entries(arrErrerr)[0][1].message;
    //     return console.log('Error create villa', err);
    //   });
  }
  goBackHandler(): void {
    this.location.back();
  }
  test(coord: { lat: string, lng: string }): void {
    this.coordinates = coord;
  }
}
