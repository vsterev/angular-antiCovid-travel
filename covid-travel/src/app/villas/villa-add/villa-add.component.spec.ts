import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaAddComponent } from './villa-add.component';

describe('VillaAddComponent', () => {
  let component: VillaAddComponent;
  let fixture: ComponentFixture<VillaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
