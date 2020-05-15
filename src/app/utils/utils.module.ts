import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RatingModule } from "ngx-rating";
import { FormsModule }   from '@angular/forms';
import { SliderModule } from 'ngx-slider';

import { HeaderComponent } from './header/header.component';
import { DetailAgencyComponent } from './detail-agency/detail-agency.component';
import { DetailPopularDestinationsComponent } from './detail-popular-destinations/detail-popular-destinations.component';
import { DetailPopularHolidayComponent } from './detail-popular-holiday/detail-popular-holiday.component';
import { UserCommentComponent } from './user-comment/user-comment.component';
import { RecentStoriesComponent } from './recent-stories/recent-stories.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DetailAgencyComponent,
    DetailPopularDestinationsComponent,
    DetailPopularHolidayComponent,
    UserCommentComponent,
    RecentStoriesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgxYoutubePlayerModule.forRoot(),
    SlickCarouselModule,
    RatingModule,
    FormsModule,
    SliderModule
  ],
  exports: [
    HeaderComponent,
    DetailAgencyComponent,
    DetailPopularDestinationsComponent,
    DetailPopularHolidayComponent,
    UserCommentComponent,
    RecentStoriesComponent,
    FooterComponent
  ]
})
export class UtilsModule { }
