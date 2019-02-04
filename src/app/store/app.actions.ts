import { Action } from '@ngrx/store';

import { AppTypes } from './app.types';

export class GetUser implements Action {
  readonly type = AppTypes.GetUser;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  readonly type = AppTypes.GetUserSuccess;
  constructor(public payload) {}
}

export class GetUserFail implements Action {
  readonly type = AppTypes.GetUserFail;
  constructor(public payload: string) {}
}

// Get Conversations of the user

export class GetConversations implements Action {
  readonly type = AppTypes.GetConversations;
  constructor(public payload: number) {}
}

export class GetConversationsSuccess implements Action {
  readonly type = AppTypes.GetConversationsSuccess;
  constructor(public payload) {}
}

export class SelectChat implements Action {
  readonly type = AppTypes.SelectChat;
  constructor(public payload) {}
}

export class SendMessage implements Action {
  readonly type = AppTypes.SendMessage;
  constructor(public payload) {}
}

export type AppActionTypes = GetUser
                           | GetUserSuccess
                           | GetUserFail
                           | GetConversations
                           | GetConversationsSuccess
                           | SelectChat
                           | SendMessage;
