import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as fromApp from './app.actions';
import { AppTypes } from './app.types';
import { UsersService } from './../services/users/users.service';

@Injectable()
export class AppEffects {
  constructor(
    private actions: Actions,
    private usersService: UsersService,
    ) {}

  @Effect()
  GetUser: Observable<any> = this.actions.pipe(
    ofType(AppTypes.GetUser),
    map((action: fromApp.GetUser) => action.payload),
    mergeMap((payload) => {
      return this.usersService.getUser(payload).pipe(
        map((user) => {
          return new fromApp.GetUserSuccess(user);
        }),
        catchError((err) => {
          return of(new fromApp.GetUserFail(err.message || err.error.message || err));
        })
      );
    })
  );

  @Effect()
  GetUserSuccess: Observable<any> = this.actions.pipe(
    ofType(AppTypes.GetUserSuccess),
    map((action: fromApp.GetUserSuccess) => {
      return new fromApp.GetConversations(action.payload.id);
    }),
  );

  @Effect()
  GetConversations: Observable<any> = this.actions.pipe(
    ofType(AppTypes.GetConversations),
    map((action: fromApp.GetConversations) => {
      const conv = this.usersService.getConversations(action.payload);
      return new fromApp.GetConversationsSuccess(conv);
    }),
  );

}

