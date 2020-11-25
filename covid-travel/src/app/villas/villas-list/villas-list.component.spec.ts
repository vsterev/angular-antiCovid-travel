import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillasListComponent } from './villas-list.component';

describe('VillasListComponent', () => {
  let component: VillasListComponent;
  let fixture: ComponentFixture<VillasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
