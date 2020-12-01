import { IVilla } from './../../shared/interfaces/villa';
import { Component, Input, OnInit } from '@angular/core';
import { VillaService } from '../villa.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-villa-book',
  templateUrl: './villa-book.component.html',
  styleUrls: ['./villa-book.component.css']
})
export class VillaBookComponent implements OnInit {
  villa?: IVilla;
  isAgree = false;
  constructor(
    private vilaService: VillaService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.villa = history.state.villa; //da se probva taka
    // this.vilaService.villaDetail(this.activatedRoute.snapshot.params.id)
    //   .subscribe(currentVilla => this.villa = currentVilla);

    // this.vilaService.villaDetail(this.activatedRoute.snapshot.params.id)
    //   .pipe(map((currentVilla: IVilla) => this.villa = currentVilla)).subscribe(); // da se probva i tova
  }
  backHandler(): void {
    this.location.back();
  }
  checkBoxHandler(): void {
    this.isAgree = !this.isAgree;
  }
}
