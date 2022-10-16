import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Возможность axios поставить заголовок запросу, для этого сделаем кастомные методы 
// common - поставить заголовок всем запросам
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  }
}

export const signUp = createAsyncThunk(
  'auth/register',
  async (registrationDetails, { rejectWithValue }) => {
    try {
        return axios.post(`/users/signup`, registrationDetails).then(({ data }) => {
          console.log('POST', data);
          // после успешной регистрации в хедер всех запроссов добавляем токен
          token.set(data.token);
            return data;
        });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (registrationDetails, { rejectWithValue }) => {
        try {
          return axios.post(`/users/login`, registrationDetails).then(({ data }) => {
             // после успешного логина в хедер всех запроссов добавляем токен 
            token.set(data.token);
            return data;
            })
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const logOut = createAsyncThunk(
  'auth/logout',
   async (_, { rejectWithValue }) => {
     try {
       const { data } = axios.post(`/users/logout`);
       token.unset();
       return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)