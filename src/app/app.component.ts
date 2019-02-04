import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppTypes } from './store/app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<any>) {}
  title = 'chat-app';
  ngOnInit() {
      this.store.dispatch({
        type: AppTypes.GetUser,
        payload: 1,
      });
  }
}
