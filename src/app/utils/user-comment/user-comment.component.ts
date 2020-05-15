import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit {
  rate: number = 5;
  constructor() { }

  ngOnInit() {
  }

}
