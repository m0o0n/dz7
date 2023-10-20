import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contact/slice';


export const store = configureStore({
  reducer: {
    contacts: contactReducer
  }
});

