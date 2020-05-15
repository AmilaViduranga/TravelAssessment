import { RecentStoryModel } from '../model/recentStory.model';

let recentStoryOne = new RecentStoryModel();
recentStoryOne.id = 1;
recentStoryOne.date = "April 14, 2019";
recentStoryOne.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
recentStoryOne.imageUrl = "../../../assets/images/img_bg_1.jpg";

let recentStoryTwo = new RecentStoryModel();
recentStoryTwo.id = 2;
recentStoryTwo.date = "April 15, 2019";
recentStoryTwo.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
recentStoryTwo.imageUrl = "../../../assets/images/img_bg_2.jpg";

let recentStoryThree = new RecentStoryModel();
recentStoryThree.id = 3;
recentStoryThree.date = "April 16, 2019";
recentStoryThree.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
recentStoryThree.imageUrl = "../../../assets/images/img_bg_3.jpg";

let recentStoryFour = new RecentStoryModel();
recentStoryFour.id = 4;
recentStoryFour.date = "April 17, 2019";
recentStoryFour.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
recentStoryFour.imageUrl = "../../../assets/images/img_bg_4.jpg";

let availableRecentStories = new Array<RecentStoryModel>();
availableRecentStories.push(recentStoryOne, recentStoryTwo, recentStoryThree, recentStoryFour);

export const stories = availableRecentStories;