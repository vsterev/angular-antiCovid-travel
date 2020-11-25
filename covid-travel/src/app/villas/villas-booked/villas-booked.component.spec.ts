import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillasBookedComponent } from './villas-booked.component';

describe('VillasBookedComponent', () => {
  let component: VillasBookedComponent;
  let fixture: ComponentFixture<VillasBookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillasBookedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillasBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
