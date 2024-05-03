
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  preferences: {}
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPreferences(state, action) {
      state.preferences = action.payload;
    },
    resetUserProfile(state) {
      return initialState;
    }
  }
});

export const { setName, setEmail, setPreferences, resetUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
