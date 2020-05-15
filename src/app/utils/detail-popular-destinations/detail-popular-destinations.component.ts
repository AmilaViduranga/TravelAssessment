import { Component, OnInit, Input } from '@angular/core';
import { PopularDestination } from '../model/popularDestination.model';

@Component({
  selector: 'app-detail-popular-destinations',
  templateUrl: './detail-popular-destinations.component.html',
  styleUrls: ['./detail-popular-destinations.component.css']
})
export class DetailPopularDestinationsComponent implements OnInit {

  @Input() availableImages: Array<PopularDestination> = new Array<PopularDestination>();
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 3};
  constructor() { }

  ngOnInit() {
  }

}
