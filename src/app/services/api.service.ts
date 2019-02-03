import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  fetchTweets(screenName) {
    const params = new HttpParams().set('screenName', screenName);
    const httpOptions = { headers: this.headers, params };

    return this.http.get(`${this.apiUrl}/tweets`, httpOptions);
  }
}
