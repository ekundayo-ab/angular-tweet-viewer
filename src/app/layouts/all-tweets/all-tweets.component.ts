import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { toHTML5Date, Usernames, DefaultLayoutData } from '../../definitions';

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

  public editForm: FormGroup;

  constructor(private apiService: ApiService) {
    let layoutDataToLoad;
    if (!localStorage.layoutData) {
      layoutDataToLoad = DefaultLayoutData;
    } else {
      layoutDataToLoad = JSON.parse(localStorage.layoutData);
    }

    Object.keys(this.currentOrder).map((ordering) => {
      this.currentOrder[ordering] = layoutDataToLoad[ordering];
    });

    this.editForm = new FormGroup({
      numberOfTweets: new FormControl(layoutDataToLoad.numberOfTweets),
      tweetRangeFrom: new FormControl(layoutDataToLoad.tweetRangeFrom),
      tweetRangeTo: new FormControl(layoutDataToLoad.tweetRangeTo),
      skinTheme: new FormControl(layoutDataToLoad.skinTheme),
      firstOrder: new FormControl(layoutDataToLoad.firstOrder),
      secondOrder: new FormControl(layoutDataToLoad.secondOrder),
      thirdOrder: new FormControl(layoutDataToLoad.thirdOrder),
    });
  }

  ngOnInit() {
    Usernames.map((username) => {
      this.tweetFetchSubscription = this.apiService.fetchTweets(username)
        .subscribe((tweets) => {
          this.tweets[username] = tweets;
        });
    });

    this.editForm.valueChanges.subscribe((values) => {
      localStorage.setItem('layoutData', JSON.stringify(values));
    });
  }

  setPageMode() {
    this.editMode = !this.editMode;
  }

  orderColumn(e) {
    const orderings = Object.keys(this.currentOrder);
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

    const tweetsToShow = this.tweets[username].filter((tweet) => {
      const tweetDate = toHTML5Date(new Date(tweet.created_at));
      return tweetDate >= tweetRangeFrom && tweetDate <= tweetRangeTo;
    });

    return tweetsToShow.slice(0, numberOfTweets);
  }

  get skinIsContrast() {
    return this.editForm.value.skinTheme === 'contrast';
  }

  ngOnDestroy() {
    if (this.tweetFetchSubscription) {
      this.tweetFetchSubscription.unsubscribe();
    }
  }


}
