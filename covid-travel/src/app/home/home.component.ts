import { VillaService } from './../villas/villa.service';
import { UserService } from './../user/user.service';
import { IVilla } from './../../../.history/src/app/shared/interfaces/villa_20201120082722';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private villaService: VillaService) { }
  villas: IVilla[] = [];
  ngOnInit(): void {
    this.villaService.villaListLimited(3)
      .subscribe(villas => {
        this.villas = villas;
      });
  }

}
