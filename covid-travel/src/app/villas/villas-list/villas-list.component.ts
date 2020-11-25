import { Component, OnInit } from '@angular/core';
import { IVilla } from 'src/app/shared/interfaces/villa';
import { VillaService } from '../villa.service';

@Component({
  selector: 'app-villas-list',
  templateUrl: './villas-list.component.html',
  styleUrls: ['./villas-list.component.css']
})
export class VillasListComponent implements OnInit {

  constructor(private villaService: VillaService) { }
  userVillas: IVilla[] = [];
  ngOnInit(): void {
    this.villaService.userVillas().subscribe(villas => this.userVillas = villas);
  }

}
