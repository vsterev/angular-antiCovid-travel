import { IVilla } from './../../shared/interfaces/villa';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { VillaService } from '../villa.service';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-villa-detail',
  templateUrl: './villa-detail.component.html',
  styleUrls: ['./villa-detail.component.css']
})
export class VillaDetailComponent implements OnInit {
  tourists: string[] = [];
  touristObj: {} = {};
  currentVilla?: IVilla;
  likesNumber?: number;
  isOwner?: boolean;
  toLike?: boolean;
  toDislike?: boolean;
  toBook = false;
  isBooked = false;
  booksField: any[] = [];
  goBack = false;
  carouselItems?: any[];
  constructor(
    private villaService: VillaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.villaService.villaDetail(this.activatedRoute.snapshot.params.id)
      .subscribe(villa => {
        this.currentVilla = villa;
        this.isOwner = villa.creatorId._id === this.userService.currentUser.userId;
        this.isBooked = !!villa.reservationId;
        this.toLike = !villa.likes.includes(this.userService.currentUser.userId) && !this.isOwner;
        this.toDislike = villa.likes.includes(this.userService.currentUser.userId) && !this.isOwner;
        this.likesNumber = this.currentVilla?.likes.length;
        // this.booksField = Array(villa.beds).fill(0).map((x, i) => i);
        this.carouselItems = [villa.imageUrl, villa.imageUrl2 || undefined, villa.imageUrl3 || undefined].filter(el => el);

      }, () => this.currentVilla = undefined);
    this.goBack = history.state?.goBack || false;
  }


  likeHandler(): void {
    this.villaService.villaLike(this.activatedRoute.snapshot.params.id)
      .subscribe(() => {
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
        switchMap(() => this.villaService.villaDetail(this.activatedRoute.snapshot.params.id))
      )
      .subscribe(() => {
        // tslint:disable-next-line: no-non-null-assertion
        this.likesNumber!--;
        this.toLike = !this.toLike;
        this.toDislike = !this.toDislike;
      },
        () => {
          console.log('Error disliking property!');
        });
  }
  clickToBookHandler(): void {
    //   // for (let i = 0, i < val, i++) {
    //   //   this.booksField.push(i);
    //   // }
    //   // this.booksField = Array(5).fill(0).map((x, i) => i);
    //   console.log(this.booksField)
    this.toBook = !this.toBook;
  }
  backHandler(): void {
    this.location.back();
  }
  bookNow(val: any): void {
    const touristsArray: string[] = [];
    // let n = 0;
    console.log(val);
    if (this.currentVilla) {
      for (let i = 0; i <= this.currentVilla.beds + 2; i += 2) {
        const firstName: string = val._directives[i].control.value;
        const secondName: string = val._directives[i + 1].control.value;
        // n = i + 1;
        const currTouristRow = `${firstName} ${secondName}`;
        // tslint:disable-next-line: no-non-null-assertion
        // this.tourists = [...this.tourists, currTouristRow];
        // this.tourists.push(currTouristRow);
        touristsArray.push(currTouristRow);
      }
      // for (let j = 0; j < touristsArray.length; j++) {
      //   const [`tourist[${i}]_1`, `tourist[${i}]_1`] = touristsArray[j].split(' ');
      //   console.log(temp)
      // }
      for (let i = 0; i < this.currentVilla.beds * 2; i++) {
        // console.log(val._directives[i].name)
        // this.touristObj[val._directives[i].name] = val._directives[i].control.value;
        const name = val._directives[i].name;
        const person = val._directives[i].control.value;
        this.touristObj = { ...this.touristObj, [name]: person };
        // this.touristObj[name] = person;
      }
      console.log(val);
      console.log(val._directives[0].name);
      console.log(val._directives[0].control.value);
      console.log(this.tourists);
      console.log(touristsArray);
      console.log(this.touristObj);

    }
  }
}
