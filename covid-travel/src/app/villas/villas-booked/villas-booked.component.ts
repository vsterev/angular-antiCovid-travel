import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/reservation/reservation.service';
import { IReservation } from 'src/app/shared/interfaces/reservation';

@Component({
  selector: 'app-villas-booked',
  templateUrl: './villas-booked.component.html',
  styleUrls: ['./villas-booked.component.css']
})
export class VillasBookedComponent implements OnInit {
  userReservations: IReservation[] = [];
  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.userReservation().subscribe(reservations => {
      this.userReservations = reservations;
    });
  }

}
