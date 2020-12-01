import { VillaService } from './../villas/villa.service';
import { UserService } from './../user/user.service';
import { IVilla } from '../shared/interfaces/villa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // villas: IVilla[] = [];
  villas: IVilla[];
  constructor(private villaService: VillaService) {
    this.villas = [];
  }
  ngOnInit(): void {
    this.villaService.villaListLimited(3)
      .subscribe(villas => {
        this.villas = villas;
      });
  }

}
