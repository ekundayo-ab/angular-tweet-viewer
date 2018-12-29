import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  fetchTweets(screenName) {
    return this.http.get(`http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=${screenName}`);
  }
}
