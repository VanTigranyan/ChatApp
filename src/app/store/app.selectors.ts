import { AppState } from './app.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getAppState = createFeatureSelector<AppState>('appState');

export const getUser = createSelector(
  getAppState,
  (state: AppState) => {
    return state.user;
  }
);

export const getConversations = createSelector(
  getAppState,
  (state: AppState) => {
    return state.conversations;
  }
);

export const getSelectedChat = createSelector(
  getAppState,
  (state: AppState) => state.selectedChat,
);
