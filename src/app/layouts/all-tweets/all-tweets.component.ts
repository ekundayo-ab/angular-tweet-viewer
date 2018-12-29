import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { toHTML5Date, Usernames } from '../../definitions';

@Component({
  selector: 'app-all-tweets',
  templateUrl: './all-tweets.component.html',
  styleUrls: ['./all-tweets.component.scss']
})
export class AllTweetsComponent implements OnInit, OnDestroy {
  tweets = { makeschool: [], newsycombinator: [], ycombinator: [] };
  usernames = Usernames;
  editMode = false;

  tweetFetchSubscription: Subscription;

  public currentOrder = {
    firstOrder: 'makeschool',
    secondOrder: 'newsycombinator',
    thirdOrder: 'ycombinator'
  };

  public editForm = new FormGroup({
    numberOfTweets: new FormControl(3),
    tweetRangeFrom: new FormControl('2018-12-01'),
    tweetRangeTo: new FormControl(toHTML5Date()),
    skinTheme: new FormControl('default'),
    firstOrder: new FormControl(this.currentOrder.firstOrder),
    secondOrder: new FormControl(this.currentOrder.secondOrder),
    thirdOrder: new FormControl(this.currentOrder.thirdOrder),
  });

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    Usernames.map((username) => {
      // this.tweetFetchSubscription = this.apiService.fetchTweets(username)
      //   .subscribe((tweets) => {
      //     this.tweets[username] = tweets;
      //   });

      this.tweets[username] = this.apiService.fetchTweets(username);
    });
  }

  orderColumn(e) {
    const orderings = ['firstOrder', 'secondOrder', 'thirdOrder'];
    const { value, name } = e.target;

    orderings.map((order) => {
      if (this.editForm.value[order] === value && order !== name) {
        this.editForm.patchValue({ [order]: this.currentOrder[name]});
      }

      if (order === name) {
        this.editForm.patchValue({ [order]: value });
      }
    });

    orderings.map((order) => {
      this.currentOrder[order] = this.editForm.value[order];
    });
  }

  tweetsToShow(username) {
    const {
      numberOfTweets,
      tweetRangeFrom,
      tweetRangeTo,
    } = this.editForm.value;

    const tweetsToShow = this.getUserTweets(username).filter((tweet) => {
      const tweetDate = toHTML5Date(new Date(tweet.created_at));
      return tweetDate >= tweetRangeFrom && tweetDate <= tweetRangeTo;
    });

    return tweetsToShow.slice(0, numberOfTweets);
  }

  getUserTweets(username) {
    return this.tweets[username];
  }

  ngOnDestroy() {
    if (this.tweetFetchSubscription) {
      this.tweetFetchSubscription.unsubscribe();
    }
  }

}
