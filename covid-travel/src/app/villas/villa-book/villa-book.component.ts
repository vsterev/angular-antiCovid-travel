import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { IVilla } from './../../shared/interfaces/villa';
import { Component, Input, OnInit } from '@angular/core';
import { VillaService } from '../villa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-villa-book',
  templateUrl: './villa-book.component.html',
  styleUrls: ['./villa-book.component.css']
})
export class VillaBookComponent implements OnInit {
  villa?: IVilla;
  isAgree: boolean;
  isOwner: boolean;
  isBooked = false;
  reservationForm: FormGroup;
  tArr = ['vaslp', 'eli'];

  constructor(
    private villaService: VillaService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.isAgree = false;
    this.reservationForm = fb.group({
      comment: ['', [Validators.required]],
      tourists: this.fb.array([
      ])
    });
    this.isOwner = false;
  }
  // tslint:disable-next-line: typedef
  get tourists() {
    return this.reservationForm.get('tourists') as FormArray;
  }
  addTourist(): void {
    this.tourists.push(this.fb.control(''));
  }
  touristConstruct(val: number): void {
    for (let i = 0; i < val; i++) {
      this.tourists.push(this.fb.control(''));
    }
  }
  touristLoad(): void {
    const touristArray = [
      { firstName: 'Vasko', secondName: 'Shterev' },
      { firstName: 'Elitsa', secondName: 'Shtereva' },
      { firstName: 'Velizar', secondName: 'Shterev' },
      { firstName: 'Veleslava', secondName: 'Ivanova' }
    ];
    touristArray.map(user => this.tourists.push(this.fb.control({ firstName: user.firstName })));
  }
  ngOnInit(): void {
    // this.villa = history.state.villa; //da se probva taka
    // this.villaService.villaDetail(this.activatedRoute.snapshot.params.id)
    // .subscribe(currentVilla => this.villa = currentVilla);

    this.villaService.villaDetail(this.activatedRoute.snapshot.params.id)
      .pipe(map((currentVilla: IVilla) => {
        this.villa = currentVilla;
        this.isOwner = currentVilla.creatorId._id === this.userService.currentUser?.userId;
        this.isBooked = !!currentVilla.reservationId;
        this.touristConstruct(currentVilla.beds);
      })).subscribe(); // da se probva i tova
    // this.touristLoad();
  }
  backHandler(): void {
    this.location.back();
  }
  checkBoxHandler(): void {
    this.isAgree = !this.isAgree;
  }
  bookHandler(val: { comment: string, tourists: [] }): void {
    // console.log(this.reservationForm.get('number')?.value);
    const villaId = this.villa?._id;
    const comment = val.comment;
    const clients = val.tourists;
    const params = { villaId, clients, comment };
    this.villaService.villaBook(params).subscribe(() => {
      this.router.navigate(['user/profile']);
      console.log('tuk');
    },
      (err) => console.error(err)
    );
  }
}
