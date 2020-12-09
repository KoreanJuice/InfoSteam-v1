import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTrackerComponent } from './price-tracker.component';

describe('PriceTrackerComponent', () => {
  let component: PriceTrackerComponent;
  let fixture: ComponentFixture<PriceTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
