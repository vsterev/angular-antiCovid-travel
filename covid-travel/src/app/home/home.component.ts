import { VillaService } from './../villas/villa.service';
import { UserService } from './../user/user.service';
import { IVilla } from '../shared/interfaces/villa';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // villas: IVilla[] = [];
  villas: IVilla[];
  isLogged = false;
  constructor(
    private villaService: VillaService,
    private userService: UserService,
    private titleService: Title
  ) {
    this.villas = [];
  }
  ngOnInit(): void {
    this.villaService.villaListLimited(3)
      .subscribe(villas => {
        this.villas = villas;
      });
    this.titleService.setTitle('Covid Travel - Home page')
  }
  ngDoCheck(): void {
    this.isLogged = this.userService.isLogged;
  }
}
