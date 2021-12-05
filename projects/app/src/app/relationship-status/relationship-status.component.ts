import { Component, OnInit } from '@angular/core';
import { MemeApiService } from '../meme-api.service';
@Component({
  selector: 'app-relationship-status',
  templateUrl: './relationship-status.component.html',
  styleUrls: ['./relationship-status.component.css'],
})
export class RelationshipStatusComponent implements OnInit {
  your_name: string = '';
  partner_name: string = '';
  constructor(private memeservice: MemeApiService) {}

  ngOnInit(): void {}
  find_percentage() {
    this.memeservice
      .finding_relationship_percentage(this.your_name, this.partner_name)
      .subscribe(
        (data: any) => {
          console.log('this is the relationship data ' + data.body.percentage);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('completed');
        }
      );
  }
}
