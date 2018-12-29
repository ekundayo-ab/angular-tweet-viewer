import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTweetComponent } from './single-tweet.component';
import { tweets } from '../../mocks/tweets.mock';

describe('SingleTweetComponent', () => {
  let component: SingleTweetComponent;
  let fixture: ComponentFixture<SingleTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTweetComponent);
    component = fixture.componentInstance;
    component.tweet = tweets[0];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
