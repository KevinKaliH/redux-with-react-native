import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthStateModel, initialValue} from './authState';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialValue,
  reducers: {
    logIn: (state, action) => {
      console.log('ok magei');

      state.name = action.payload.name;
      state.isLogged = action.payload.isLogged;

    },

    toggle: (state, action) => {
      state.isLogged = action.payload.isLogged;
    },

    signOut: state => {
      state.isLogged = false;
      state.name = '';
    },
  },
});

export default AuthSlice.reducer;
export const {logIn, signOut} = AuthSlice.actions;
