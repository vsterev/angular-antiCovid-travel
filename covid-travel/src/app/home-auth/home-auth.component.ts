import { IVilla } from 'src/app/shared/interfaces/villa';
import { VillaService } from './../villas/villa.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-auth',
  templateUrl: './home-auth.component.html',
  styleUrls: ['./home-auth.component.css']
})
export class HomeAuthComponent implements OnInit {
  // villas: IVilla[] = [];
  // from = '';
  // to = '';
  // search = '';
  villas: IVilla[];
  from: string;
  to: string;
  search: string;
  constructor(
    private villaService: VillaService,
    private titleService: Title
  ) {
    this.villas = [];
    this.from = '';
    this.to = '';
    this.search = '';
  }
  // str: { from: string, to: string, search: string } = { from: this.from, to: this.to, search: this.search };
  // searchVillas(this.str: any ): void {
  //   this.villaService.villaListExtended(this.str)
  //     .subscribe((villas: IVilla[]) => {
  //       this.villas = villas;
  //     }
  // }
  getVillas(): void {
    const str = { from: this.from, to: this.to, search: this.search };
    this.villaService.villaListExtended(str)
      .subscribe((villas) => {
        this.villas = villas;
      }
      );
  }
  ngOnInit(): void {
    this.titleService.setTitle('Covid Travel - Home page');
    this.getVillas();
  }
  searchHandler(val: { from: string, to: string, search: string }): void {
    this.from = val.from;
    this.to = val.to;
    this.search = val.search;
    // const str = { from: this.from, to: this.to, search: this.search };
    // this.villaService.villaListExtended(str)
    //   .subscribe((villas) => {
    //     this.villas = villas;
    //   }
    //   );
    this.getVillas();
  }

}
