import { PopularHoliday } from '../model/popularHoliday.model';

let holidayOne = new PopularHoliday();
holidayOne.id = 1;
holidayOne.header = "Location One";
holidayOne.image = "../../../assets/images/menu-1.jpg";
holidayOne.price = 300;
holidayOne.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";


let holidayTwo = new PopularHoliday();
holidayTwo.id = 2;
holidayTwo.header = "Location Two";
holidayTwo.image = "../../../assets/images/menu-2.jpg";
holidayTwo.price = 400;
holidayTwo.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

let holidayThree = new PopularHoliday();
holidayThree.id = 3;
holidayThree.header = "Location Thr";
holidayThree.image = "../../../assets/images/menu-3.jpg";
holidayThree.price = 500;
holidayThree.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

let holidayFour = new PopularHoliday();
holidayFour.id = 4;
holidayFour.header = "Location Four";
holidayFour.image = "../../../assets/images/menu-4.jpg";
holidayFour.price = 600;
holidayFour.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

let holidayFive = new PopularHoliday();
holidayFive.id = 5;
holidayFive.header = "Location Five";
holidayFive.image = "../../../assets/images/menu-5.jpg";
holidayFive.price = 700;
holidayFive.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

let holidaySix = new PopularHoliday();
holidaySix.id = 6;
holidaySix.header = "Location Six";
holidaySix.image = "../../../assets/images/menu-6.jpg";
holidaySix.price = 800;
holidaySix.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

let holidaySeven = new PopularHoliday();
holidaySeven.id = 7;
holidaySeven.header = "Location Seven";
holidaySeven.image = "../../../assets/images/menu-7.jpg";
holidaySeven.price = 300;
holidaySeven.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

let holidayEight = new PopularHoliday();
holidayEight.id = 8;
holidayEight.header = "Location Eight";
holidayEight.image = "../../../assets/images/menu-8.jpg";
holidayEight.price = 500;
holidayEight.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

let availableHolidays = new Array<PopularHoliday>();
availableHolidays.push(holidayOne, holidayTwo, holidayThree, holidayFour, holidayFive, holidaySix);

export const holidayList = availableHolidays;