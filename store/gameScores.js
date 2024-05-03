// État pour les scores des jeux

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scores: {
    ticTacToe: 0,
    blackjack: 0,
    poker: 0
  }
};

const gameScoresSlice = createSlice({
  name: 'gameScores',
  initialState,
  reducers: {
    setScore(state, action) {
      const { gameName, score } = action.payload;
      state.scores[gameName] = score;
    },
    resetGameScores(state) {
      state.scores = initialState.scores;
    }
  }
});

export const { setScore, resetGameScores } = gameScoresSlice.actions;
export default gameScoresSlice.reducer;
