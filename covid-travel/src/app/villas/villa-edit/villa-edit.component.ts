import { UserService } from './../../user/user.service';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { IVilla } from 'src/app/shared/interfaces/villa';
import { VillaService } from '../villa.service';
import { Location } from '@angular/common';
import { switchMap, tap } from 'rxjs/operators';
import { IvyParser } from '@angular/compiler';

@Component({
  selector: 'app-villa-edit',
  templateUrl: './villa-edit.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./villa-edit.component.css']
})
export class VillaEditComponent implements OnInit {

  // get isOwner(): void {
  //   //  this.villaInfo?.creatorId._id === this.userService.currentUser._id;
  //   console.log(this.villaInfo.creatorId._id)
  // }
  // name: string;
  // region: string;
  // date: string;
  // beds: number;
  //  nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3, lat, lng
  villaInfo?: IVilla;
  isOwner: boolean | undefined;
  toLike: boolean | undefined;
  toDislike: boolean | undefined;
  likesNumber?: number;
  errMsg = '';
  coordinates?: { lat: string, lng: string };

  // likesDisplay(): number {
  //   return this.villaInfo?.likes.length;
  // }
  constructor(
    private villaService: VillaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {

  }
  ngOnInit(): void {
    this.villaService.villaDetail(this.activatedRoute.snapshot.params.id).subscribe((result: any) => {
      const villa: any = result;
      this.villaInfo = villa;
      this.isOwner = villa.creatorId._id === this.userService.currentUser.userId;
      this.toLike = !villa.likes.includes(this.userService.currentUser.userId) && !this.isOwner;
      this.toDislike = villa.likes.includes(this.userService.currentUser.userId) && !this.isOwner;
      this.likesNumber = this.villaInfo?.likes.length;

    },
      err => {
        console.log(err);
        // this.villaInfo = null;
        this.isOwner = false;
      });
  }

  submitHandler(val: {}): void {
    const { name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3, lat, lng }: any = val;
    const villaInfo: any = {
      name, region, date, beds, nights, price, priceDescription, description,
      imageUrl, imageUrl2, imageUrl3, coordinates: { ...this.coordinates }
    };
    // console.log(villaInfo);
    this.villaService.villaEdit(villaInfo, this.activatedRoute.snapshot.params.id)
      .subscribe((newVilla) => {
        console.log(newVilla);
        return this.router.navigate(['/villa/detail', this.activatedRoute.snapshot.params.id]);
      }, (err) => {
        return console.log('Error create villa', err);
      });
  }
  deleteHandler(): void {
    // console.log('delete is clicked', this.activatedRoute.snapshot.params.id);
    if (window.confirm('This villa will be delete, please confirm')) {
      this.villaService.villaDelete(this.activatedRoute.snapshot.params.id)
        .subscribe(() => {
          this.router.navigate(['/user/profile']);
          console.log('The property was deleted!');
        },
          () => {
            console.log('Error deleting property!');
          });
    }
  }
  likeHandler(): void {
    this.villaService.villaLike(this.activatedRoute.snapshot.params.id)
      .subscribe(() => {
        // this.router.navigate(['/villa/edit', this.activatedRoute.snapshot.params.id]);
        // window.location.reload();
        // location.reload();
        console.log('The property was liked!');
        // tslint:disable-next-line: no-non-null-assertion
        this.likesNumber!++;
        this.toLike = !this.toLike;
        this.toDislike = !this.toDislike;
      },
        () => {
          console.log('Error liking property!');
        });
  }
  disLikeHandler(): void {
    this.villaService.villaDislike(this.activatedRoute.snapshot.params.id)
      .pipe(
        // tap(() => this.villaInfo.likes = null),
        switchMap(() => this.villaService.villaDetail(this.activatedRoute.snapshot.params.id))
      )
      .subscribe((villa) => {
        // this.router.navigate(['/villa/edit', this.activatedRoute.snapshot.params.id]);
        // document.location.reload()
        // location.reload();
        // window.location.reload();
        // this.villaInfo.likes = villa.likes || [];
        // console.log('The property was disliked!', this.villaInfo.likes);
        // tslint:disable-next-line: no-non-null-assertion
        this.likesNumber!--;
        this.toLike = !this.toLike;
        this.toDislike = !this.toDislike;
      },
        (err) => {
          const arrErrerr: {
            message: string; name: string
          }[] = err.error.msg;
          this.errMsg = Object.entries(arrErrerr)[0][1].message;
          console.log('Error disliking property!', err.error.msg.name);
        });
  }
  backHandler(): void {
    this.location.back();
  }
  coordinatesEvent(coors: { lat: string, lng: string }): void {
    this.coordinates = coors;
  }
}
