import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  imageUrls: Array<string> = new Array<string>();
  constructor() { }

  ngOnInit() {
    this.imageUrls.push(
      "../../../assets/images/amenities-1.jpg",
      "../../../assets/images/amenities-2.jpg",
      "../../../assets/images/amenities-3.jpg",
      "../../../assets/images/blog-1.jpg",
      "../../../assets/images/blog-2.jpg",
      "../../../assets/images/blog-3.jpg"
    );
  }

}
