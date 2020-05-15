import { Component, OnInit, Input } from '@angular/core';
import { RecentStoryModel } from '../model/recentStory.model';

@Component({
  selector: 'app-recent-stories',
  templateUrl: './recent-stories.component.html',
  styleUrls: ['./recent-stories.component.css']
})
export class RecentStoriesComponent implements OnInit {

  @Input() availableStories: Array<RecentStoryModel> = new Array<RecentStoryModel>();
  constructor() { }

  ngOnInit() {
  }

}
