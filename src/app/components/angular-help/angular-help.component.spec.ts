import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHelpComponent } from './angular-help.component';

describe('AngularHelpComponent', () => {
  let component: AngularHelpComponent;
  let fixture: ComponentFixture<AngularHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
