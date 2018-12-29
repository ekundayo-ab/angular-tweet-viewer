import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweets-user',
  templateUrl: './tweets-user.component.html',
  styleUrls: ['./tweets-user.component.scss']
})
export class TweetsUserComponent implements OnInit {
  @Input() username
  constructor() { }

  ngOnInit() {
  }

}
