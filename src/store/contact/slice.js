import { createSlice } from '@reduxjs/toolkit';
import { createContactThunk, deleteContactThunk, fetchContactsThunk } from './actions';

const initialState = {
  items: [],
  filteredItems: null,
  isLoading: false,
  error: ''
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact: (state, { payload }) => {
      state.filteredItems = payload
        ? state.items.filter(el =>
            el.name.toLowerCase().includes(payload.toLowerCase())
          )
        : null;
    },
  },

  extraReducers: (builder) => {
    builder
    .addCase(fetchContactsThunk.pending, (state, _) => {
        state.isLoading = true
    })
    .addCase(fetchContactsThunk.fulfilled, (state, {payload}) => {
      state.items = payload
      state.isLoading = false
    })
    .addCase(fetchContactsThunk.rejected, (state, {payload}) => {
      state.isLoading = false
      state.error = payload
    })



    .addCase(createContactThunk.pending, (state, _)=> {
      state.isLoading = true
    })
    .addCase(createContactThunk.fulfilled, (state, {payload}) => {
      state.items = [...state.items, payload]
      state.isLoading = false
    })
    .addCase(createContactThunk.rejected, (state, {payload}) => {
      state.isLoading = false
      state.error = payload
    })


    .addCase(deleteContactThunk.pending, (state, _)=> {
      state.isLoading = true
    })
    .addCase(deleteContactThunk.fulfilled, (state, {payload}) => {
      state.items = state.items.filter(el => el.id !== payload.id)
      state.isLoading = false
    })
    .addCase(deleteContactThunk.rejected, (state, {payload}) => {
      state.isLoading = false
      state.error = payload
    })
  }
});

export const contactReducer = contactSlice.reducer;
export const { filterContact } = contactSlice.actions;
