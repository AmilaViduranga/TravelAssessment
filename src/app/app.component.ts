import { Component } from '@angular/core';
import { AgencyModel } from './utils/model/agency.model';
import { PopularDestination } from './utils/model/popularDestination.model';
import { PopularHoliday } from './utils/model/popularHoliday.model';
import { RecentStoryModel } from './utils/model/recentStory.model';
// dao imports
import { agencyDao } from './utils/dao/agency.dao';
import { DestinationList } from './utils/dao/destinations.dao';
import { holidayList } from './utils/dao/popularHolidays.dto';
import { stories } from './utils/dao/recentStories.dao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'assessment';
  agency: AgencyModel = agencyDao;
  destinationList: Array<PopularDestination> = DestinationList;
  availableHolidays: Array<PopularHoliday> = holidayList;
  availableStories: Array<RecentStoryModel> = stories;
}
