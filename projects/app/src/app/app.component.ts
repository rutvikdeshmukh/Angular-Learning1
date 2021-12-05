import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { MemeApiService } from './meme-api.service';
import { MemeContent } from './meme-content';
import { RandomDataType } from './random_data/random_data_type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  data: any;
  completed: boolean = false;
  click_flag: boolean = false;
  subreddit_name: string = '';
  specific_subreddits;
  random_profile: any;
  user_click_flag: boolean = false;
  relationship_flag: boolean = false;
  constructor(private meme_service: MemeApiService, private router: Router) {
    meme_service.get_all_subreddits().subscribe(
      (data) => {
        this.data = data;
      },
      (err) => console.log(err),
      () => {
        this.completed = true;
      }
    );
    meme_service.finding_relationship_percentage('rutvik', 'shradha').subscribe(
      (data: any) => {
        console.log(data.body);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('completed');
      }
    );
  }
  show_specific_subreddits() {
    this.click_flag = true;
    this.meme_service.get_specific_subreddit(this.subreddit_name).subscribe(
      (data) => {
        this.specific_subreddits = data;
      },
      (err) => {},
      () => {}
    );
  }
  resetting_click_flag() {
    this.click_flag = false;
    this.subreddit_name = '';
  }

  ngOnInit() {}
  ngAfterViewInit() {}
  demo() {
    this.router.navigate(['user-data']).then(
      (nav) => {
        console.log(nav); // true if navigation is successful
        this.user_click_flag = true;
      },
      (err) => {
        console.log(err); // when there's an error
      }
    );
  }
  restting_user_click_flag() {
    this.user_click_flag = false;
    this.click_flag = false;
    this.router.navigate(['/']);
  }
  setting_relationship_flag() {
    this.relationship_flag = true;
    this.router.navigate(['relationship']);
  }
  resetting_relationship_flag() {
    this.relationship_flag = false;
  }
}
