import { PopularDestination } from '../model/popularDestination.model';

let array = new Array<PopularDestination>();

let destinationOne = new PopularDestination();
destinationOne.id = 1;
destinationOne.imageUrl = "../../../assets/images/img_bg_1.jpg";
destinationOne.title = "Place One";
destinationOne.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";

let destinationTwo = new PopularDestination();
destinationTwo.id = 2;
destinationTwo.imageUrl = "../../../assets/images/img_bg_2.jpg";
destinationTwo.title = "Place Two";
destinationTwo.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";

let destinationThree = new PopularDestination();
destinationThree.id = 3;
destinationThree.imageUrl = "../../../assets/images/img_bg_3.jpg";
destinationThree.title = "Place Three";
destinationThree.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";

let destinationFour = new PopularDestination();
destinationFour.id = 4;
destinationFour.imageUrl = "../../../assets/images/img_bg_4.jpg";
destinationFour.title = "Place Four";
destinationFour.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";

let destinationFive = new PopularDestination();
destinationFive.id = 5;
destinationFive.imageUrl = "../../../assets/images/img_bg_5.jpg";
destinationFive.title = "Place Five";
destinationFive.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";

let destinationSix = new PopularDestination();
destinationSix.id = 6;
destinationSix.imageUrl = "../../../assets/images/blog-2.jpg";
destinationSix.title = "Place Six";
destinationSix.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";

let destinationSeven = new PopularDestination();
destinationSeven.id = 7;
destinationSeven.imageUrl = "../../../assets/images/blog-1.jpg";
destinationSeven.title = "Place Seven";
destinationSeven.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";

array.push(destinationOne, destinationTwo, destinationThree, destinationFour, destinationFive, destinationSix, destinationSeven);

export const DestinationList = array;
