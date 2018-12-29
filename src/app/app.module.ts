import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTweetsComponent } from './layouts/all-tweets/all-tweets.component';
import { ApiService } from './services/api.service';
import { SingleTweetComponent } from './layouts/single-tweet/single-tweet.component';
import { TweetsUserComponent } from './layouts/tweets-user/tweets-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTweetsComponent,
    SingleTweetComponent,
    TweetsUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
