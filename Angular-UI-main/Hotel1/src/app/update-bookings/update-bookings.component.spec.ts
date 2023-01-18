import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookingsComponent } from './update-bookings.component';

describe('UpdateBookingsComponent', () => {
  let component: UpdateBookingsComponent;
  let fixture: ComponentFixture<UpdateBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
