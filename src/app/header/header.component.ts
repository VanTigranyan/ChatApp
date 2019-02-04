import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { getUser, getSelectedChat } from './../store/app.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<any>) { }

  public user;
  public chat;

  ngOnInit() {
    this.store.pipe(
      select(getUser),
    ).subscribe((user) => {
      this.user = user;
    });

    this.store.pipe(
      select(getSelectedChat),
    ).subscribe(chat => this.chat = chat);
  }

}
