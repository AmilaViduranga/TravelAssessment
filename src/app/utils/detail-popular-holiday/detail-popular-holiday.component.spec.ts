import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPopularHolidayComponent } from './detail-popular-holiday.component';

describe('DetailPopularHolidayComponent', () => {
  let component: DetailPopularHolidayComponent;
  let fixture: ComponentFixture<DetailPopularHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPopularHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPopularHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
