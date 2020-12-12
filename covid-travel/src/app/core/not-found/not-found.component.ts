import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  @Input() errMsg?: string;
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Covid Travel - Error Page');
    this.errMsg = '404 - Page not found!'
  }

}
