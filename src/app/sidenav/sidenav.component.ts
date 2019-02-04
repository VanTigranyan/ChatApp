import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getConversations } from '../store/app.selectors';

import { AppTypes } from './../store/app.types';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor(private store: Store<any>) {}

  public conversations;
  public selectedChat = 0;

  public selectChat(item, i) {
    this.selectedChat = i;
    this.store.dispatch({
      type: AppTypes.SelectChat,
      payload: item,
    });
  }

  ngOnInit() {
    this.store.pipe(
      select(getConversations),
    ).subscribe(conv => {
      this.conversations = conv;
      this.selectChat(this.conversations[0], 0);
    });
    console.log(this.conversations);
  }
}
