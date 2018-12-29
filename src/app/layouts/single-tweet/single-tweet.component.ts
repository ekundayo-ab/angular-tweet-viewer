import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-tweet',
  templateUrl: './single-tweet.component.html',
  styleUrls: ['./single-tweet.component.scss']
})
export class SingleTweetComponent implements OnInit {
  @Input() tweet;
  constructor() { }

  ngOnInit() {
  }

}
