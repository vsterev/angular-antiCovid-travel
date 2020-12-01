import { IVilla } from './../interfaces/villa';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() villa?: IVilla;
  @Input() isDisabled?: boolean;
  isSold = 'available';

  ngOnInit(): void {
  }
  moreHandler(): void {
    this.router.navigate(['villa/detail', this.villa?._id], { state: { goBack: true } });
  }
  checkAvailability(): boolean {
    if (!!this.villa?.reservationId) {
      this.isSold = 'sold out';
    } else {
      this.isSold = 'available';
    }
    return !!this.villa?.reservationId;
  }
}
