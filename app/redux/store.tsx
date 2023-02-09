import {configureStore} from '@reduxjs/toolkit';
import AuthSlice from './authReducer/auth.slice';

const store = configureStore({
  reducer: {
    auth: AuthSlice
  },
});

export default store;
