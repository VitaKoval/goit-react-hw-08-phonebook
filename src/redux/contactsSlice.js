import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './contactsOperations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

// хелперы
const setPending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};
const setError = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

// Слайс для контактов
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterAdd(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    // встоенный IMMER который не мутирует state! только для Redux Toolkit
    [fetchContacts.pending]: setPending,
    [addContact.pending]: setPending,
    [deleteContact.pending]: setPending,

    [fetchContacts.fulfilled]: (state, action) => {
      // console.log('action', action.payload);
      // console.log('state', state.contacts);
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    },
    [addContact.fulfilled]: (state, action) => {
      
      console.log(action.payload);
      state.contacts.items.push(action.payload);
      state.contacts.isLoading = false;
      // console.log('action.payload', action.payload.name);
       console.log(state.contacts.items);
    },
    [deleteContact.fulfilled]: (state, action) => {
      // console.log(action.payload.id);
      const index = state.contacts.items.findIndex(
        item => item.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
      state.contacts.isLoading = false;
    },

    [fetchContacts.rejected]: setError,
    [addContact.rejected]: setError,
    [deleteContact.rejected]: setError,
  },
});

export const { filterAdd } = contactsSlice.actions;
