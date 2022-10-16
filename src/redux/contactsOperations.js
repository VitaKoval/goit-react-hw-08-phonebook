import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await axios.get(`/contacts`).then(({ data }) => data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      // console.log(newContact);
      return await axios.post(`/contacts`, newContact).then(({ data }) =>
      {console.log(data)
        return data
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await axios.delete(`/contacts/${id}`).then(({ data }) => data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
