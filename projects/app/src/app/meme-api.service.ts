import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root',
})
export class MemeApiService {
  constructor(private httpClient: HttpClient) {}
  get_all_subreddits() {
    return this.httpClient.get('https://meme-api.herokuapp.com/gimme/15');
  }
  get_specific_subreddit(sub_reddit_name: string) {
    return this.httpClient.get(
      `https://meme-api.herokuapp.com/gimme/${sub_reddit_name}/10`
    );
  }
  random_face_data() {
    return this.httpClient.get('https://randomuser.me/api/');
  }
  finding_relationship_percentage(your_name: string, partner_name: string) {
    return this.httpClient.get(
      'https://love-calculator.p.rapidapi.com/getPercentage',

      {
        params: { sname: your_name, fname: partner_name },
        observe: 'response',
        headers: {
          'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
          'x-rapidapi-key':
            'd75c6e07bfmsh5a8a88bed28ce7fp108410jsn6abeef82eadb',
        },
      }
    );
  }
}
