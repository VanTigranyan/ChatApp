import { AppTypes } from './../store/app.types';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { getSelectedChat, getUser } from './../store/app.selectors';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor(private store: Store<any>) {}

  public chat;
  public user;
  public message = new FormControl('');

  public sendMessage() {
    const convId = this.chat.conversation.id;
    const from = this.user.id;
    const d = new Date();
    const date = d.toISOString();
    this.store.dispatch({
      type: AppTypes.SendMessage,
      payload: { convId, message: { from, date, text: this.message.value }}
    });
    this.message.reset();
  }

  ngOnInit() {
    this.store.pipe(
      select(getSelectedChat)
    ).subscribe((chat) => {
      this.chat = chat;
      console.log(this.chat);
    });

    this.store.pipe(
      select(getUser),
    ).subscribe(user => this.user = user);
    console.log(this.chat);
  }

}
