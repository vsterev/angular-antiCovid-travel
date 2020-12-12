import { IReservation } from '../../shared/interfaces/reservation';
import { ReservationService } from './../reservation.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  // declare reservation: IReservation;
  // goBack = false;
  // reservation!: IReservation;
  goBack: boolean;
  reservation: IReservation | undefined;

  constructor(
    private activatredRoute: ActivatedRoute,
    private reservationService: ReservationService,
    private location: Location,
    private titleService: Title
  ) {
    this.goBack = false;
    this.reservation = undefined;
    const id = this.activatredRoute.snapshot.params.id;
    this.reservationService.reservationDetail(id).subscribe(booking => this.reservation = booking);
    this.titleService.setTitle('Covid Travel - Booking info')
  }
  ngOnInit(): void {
    this.goBack = history.state.goBack;
  }
  goBackHandler(): void {
    this.location.back();
  }
}
