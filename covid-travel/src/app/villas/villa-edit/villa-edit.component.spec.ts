import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaEditComponent } from './villa-edit.component';

describe('VillaEditComponent', () => {
  let component: VillaEditComponent;
  let fixture: ComponentFixture<VillaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
