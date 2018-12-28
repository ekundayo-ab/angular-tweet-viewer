import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { toHTML5Date, ScreenNames } from '../../definitions';

@Component({
  selector: 'app-all-tweets',
  templateUrl: './all-tweets.component.html',
  styleUrls: ['./all-tweets.component.scss']
})
export class AllTweetsComponent implements OnInit {
  tweets;
  screenNames = ScreenNames;
  editMode = false;

  public editForm = new FormGroup({
    numberOfTweets: new FormControl(3),
    tweetRangeFrom: new FormControl('2018-12-01'),
    tweetRangeTo: new FormControl(toHTML5Date()),
    skinTheme: new FormControl('default'),
    firstOrder: new FormControl('makeschool'),
    secondOrder: new FormControl('newsycombinator'),
    thirdOrder: new FormControl('ycombinator'),
  });

  constructor(private apiService: ApiService) {
    // console.log(nowDate());
  }

  ngOnInit() {
    this.tweets = this.apiService.fetchTweets('screenName');
    // ScreenNames.map((screenName) => {
    //   this.tweets.push(this.apiService.fetchTweets(screenName));
    // });
    this.onChanges();
  }

  setPageMode() {
    this.editMode = !this.editMode;
  }

  onChanges() {
    this.editForm.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }

  get tweetsToShow() {
    const {
      numberOfTweets,
      tweetRangeFrom,
      tweetRangeTo,
    } = this.editForm.value;

    const tweetsToShow = this.tweets.filter((tweet) => {
      const tweetDate = toHTML5Date(new Date(tweet.created_at));
      return tweetDate >= tweetRangeFrom && tweetDate <= tweetRangeTo;
    });

    return tweetsToShow.slice(0, numberOfTweets);
  }

}
