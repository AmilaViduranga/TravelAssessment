import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPopularDestinationsComponent } from './detail-popular-destinations.component';

describe('DetailPopularDestinationsComponent', () => {
  let component: DetailPopularDestinationsComponent;
  let fixture: ComponentFixture<DetailPopularDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPopularDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPopularDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
