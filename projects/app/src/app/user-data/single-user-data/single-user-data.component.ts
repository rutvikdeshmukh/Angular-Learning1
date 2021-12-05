import { RandomDataType } from './../../random_data/random_data_type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-user-data',
  templateUrl: './single-user-data.component.html',
  styleUrls: ['./single-user-data.component.css'],
})
export class SingleUserDataComponent implements OnInit {
  @Input('single_user_data') single_user_data: RandomDataType;
  constructor() {}

  ngOnInit(): void {
    console.log(
      console.log(
        `single user data in single -user-component  ${this.single_user_data}`
      )
    );
  }
}
