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
  imageUrl?: string;
  imageUrl2?: string;
  imageUrl3?: string;

  // @Input() coordinates?: { lat: string, lng: string };
  ngOnInit(): void {
    this.goBack = history.state?.goBack || false;
  }
  submitHandler(val: {}): void {
    // console.log(val)
    // const { name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3, lat, lng }: any = val;
    const { name, region, date, beds, nights, price, priceDescription, description, lat, lng }: any = val;
    const villaInfo: any = {
      name, region, date, beds, nights, price, priceDescription, description,
      imageUrl: this.imageUrl, imageUrl2: this.imageUrl2, imageUrl3: this.imageUrl3,
      coordinates: { lat: this.coordinates?.lat, lng: this.coordinates?.lng }
    };
    // console.log(villaInfo);
    this.villaService.villaAdd(villaInfo)
      .subscribe((newVilla) => {
        console.log(newVilla);
        return this.router.navigate(['/user/profile']);
      }, (err) => {
        const arrErrerr: {
          message: string; name: string
        }[] = err.error.msg;
        this.errMsg = Object.entries(arrErrerr)[0][1].message;
        return console.log('Error create villa', err);
      });
  }
  goBackHandler(): void {
    this.location.back();
  }
  eventCoordinates(coord: { lat: string, lng: string }): void {
    this.coordinates = coord;
  }
  getUploadedImageUrl(event: any, num: number): boolean {
    switch (num) {
      case 2: this.imageUrl2 = event;
        ; break;
      case 3: this.imageUrl3 = event;
        break;
      default:
        this.imageUrl = event;
    }
    // this.imageUrl = event;
    return false;
  }
  // getUploadedImageUrl2(event: any): boolean {
  //   this.imageUrl2 = event;
  //   return false;
  // }
}
