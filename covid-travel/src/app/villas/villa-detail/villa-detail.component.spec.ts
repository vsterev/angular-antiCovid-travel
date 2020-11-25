import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaDetailComponent } from './villa-detail.component';

describe('VillaDetailComponent', () => {
  let component: VillaDetailComponent;
  let fixture: ComponentFixture<VillaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
