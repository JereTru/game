
import { configureStore } from '@reduxjs/toolkit';
import userProfileReducer from './userProfile';
import gameScoresReducer from './gameScores';

const store = configureStore({
  reducer: {
    userProfile: userProfileReducer,
    gameScores: gameScoresReducer
  }
});

export default store;
