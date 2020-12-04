import { Component, AfterViewInit, ViewChild, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit, OnInit {
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  @Input() image1?: string;
  @Input() image2?: string;
  @Input() image3?: string;
  @Input() imgArr = [];
  @Input() carouselItems = [];
  @ViewChild('myCarousel') myCarousel?: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    slide: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2
  }
  constructor(private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    // console.log(this.carouselItems);
  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  reset(): void {
    this.myCarousel?.reset(!this.resetAnim);
  }

  moveTo(slide: any): void {
    this.myCarousel?.moveTo(slide, !this.withAnim);
  }
}
