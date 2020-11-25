import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaBookComponent } from './villa-book.component';

describe('VillaBookComponent', () => {
  let component: VillaBookComponent;
  let fixture: ComponentFixture<VillaBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillaBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
