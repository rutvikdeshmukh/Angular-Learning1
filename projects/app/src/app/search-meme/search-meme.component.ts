import { Component, OnInit, Input } from '@angular/core';
import { MemeApiService } from '../meme-api.service';
@Component({
  selector: 'app-search-meme',
  templateUrl: './search-meme.component.html',
  styleUrls: ['./search-meme.component.css'],
})
export class SearchMemeComponent implements OnInit {
  reset_flag: boolean = false;
  @Input('specific_subreddits') specific_subreddits;
  constructor(private memeservice: MemeApiService) {}

  ngOnInit(): void {}
}
