import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AllTweetsComponent } from './all-tweets.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleTweetComponent } from '../single-tweet/single-tweet.component';
import { TweetsUserComponent } from '../tweets-user/tweets-user.component';
import { HttpClientModule } from '@angular/common/http';

describe('AllTweetsComponent', () => {
  let component: AllTweetsComponent;
  let fixture: ComponentFixture<AllTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AllTweetsComponent,
        SingleTweetComponent,
        TweetsUserComponent
      ],
      imports: [
        ReactiveFormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render default page mode as VIEW', () => {
    const element = fixture.debugElement;
    const modeText = element.query(By.css('.toggle .subtitle')).nativeElement.textContent.trim();

    expect(modeText).toEqual('VIEW');
  });

  it('should toggle page mode when toggle element is clicked', () => {
    const element = fixture.debugElement;

    let modeText = element.query(By.css('.toggle .subtitle')).nativeElement.textContent.trim();
    expect(modeText).toEqual('VIEW');

    element.query(By.css('.toggle .button')).nativeElement.click();

    fixture.detectChanges();

    modeText = element.query(By.css('.toggle .subtitle')).nativeElement.textContent.trim();
    expect(modeText).toEqual('EDIT');
  });
});
