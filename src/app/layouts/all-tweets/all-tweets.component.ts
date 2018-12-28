import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ScreenNames } from '../../definitions/screen-names';
import { PageMode } from '../../definitions/page-mode.type';

@Component({
  selector: 'app-all-tweets',
  templateUrl: './all-tweets.component.html',
  styleUrls: ['./all-tweets.component.scss']
})
export class AllTweetsComponent implements OnInit {
  tweets;
  screenNames = ScreenNames;
  editMode = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.tweets = this.apiService.fetchTweets('screenName');
    // ScreenNames.map((screenName) => {
    //   this.tweets.push(this.apiService.fetchTweets(screenName));
    // });
  }

  setPageMode() {
    this.editMode = !this.editMode
  }

}
