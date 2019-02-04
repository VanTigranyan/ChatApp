import { AppTypes } from './app.types';
import { AppActionTypes } from './app.actions';

export interface AppState {
  user: object | null;
  conversations: any[] | null;
  selectedChat: any;
  error: string | null;
}

const initState: AppState = {
  user: null,
  conversations: null,
  selectedChat: null,
  error: null,
};

export function appReducer(state: AppState = initState, action: AppActionTypes): AppState {
  const { type, payload } = action;
  switch (type) {
    case AppTypes.GetUserSuccess:
      return { ...state, user: payload };
    case AppTypes.GetUserFail:
      return { ...state, error: payload };

    case AppTypes.GetConversationsSuccess:
      return { ...state, conversations: payload };

    case AppTypes.SelectChat:
      return { ...state, selectedChat: payload };

    case AppTypes.SendMessage:
      const s = {...state};
      const chat = s.conversations.find((ch) => ch['conversation']['id'] === payload.convId);
      chat['conversation']['messages'].push(payload.message);
      const idx = s.conversations.indexOf(chat);
      s.conversations[idx]  = chat;
      return { ...s };

    default:
      return state;
  }
}
