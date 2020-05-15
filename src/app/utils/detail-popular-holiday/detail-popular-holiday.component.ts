import { Component, OnInit, Input } from '@angular/core';
import { PopularHoliday } from '../model/popularHoliday.model';

@Component({
  selector: 'app-detail-popular-holiday',
  templateUrl: './detail-popular-holiday.component.html',
  styleUrls: ['./detail-popular-holiday.component.css']
})
export class DetailPopularHolidayComponent implements OnInit {

  @Input() availableHolidays: Array<PopularHoliday> = new Array<PopularHoliday>();
  constructor() { }

  ngOnInit() {
  }

}
