import { createAsyncThunk } from '@reduxjs/toolkit';
import { closeModal } from 'redux/global/globalSlice';
import { refreshUser } from 'redux/session/sessionOperations';
import { auth, setAuthToken } from 'services/authAPI';

export const getCategories = createAsyncThunk(
  'finance/getCategories',
  async function getAllCategories(_, thunkAPI) {
    const state = thunkAPI.getState();
    const persistedToken = state.session.token;
    try {
      setAuthToken(persistedToken);
      const res = await auth.get('/api/transaction-categories');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createTransaction = createAsyncThunk(
  'finance/createTransaction',
  async function createNewTransaction(transData, thunkAPI) {
    try {
      const res = await auth.post('/api/transactions', transData);
      return res.data;
    } catch (error) {
      console.log('error!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTransaction = createAsyncThunk(
  'finance/editTransaction',
  async function editTransactionById(transData, thunkAPI) {
    try {
      const transactionId = transData.id;
      delete transData.id;
      const res = await auth.patch(
        `/api/transactions/${transactionId}`,
        transData
      );
      thunkAPI.dispatch(getTransactions());
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'finance/deleteTransaction',
  async function deleteTransactionById(id, thunkAPI) {
    try {
      const res = await auth.delete(`/api/transactions/${id}`);
      thunkAPI.dispatch(getTransactions());
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTransactions = createAsyncThunk(
  'finance/getTransactions',
  async function getAllTransactions(_, thunkAPI) {
    const state = thunkAPI.getState();
    const persistedToken = state.session.token;
    try {
      setAuthToken(persistedToken);
      const res = await auth.get('/api/transactions');
      thunkAPI.dispatch(refreshUser());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
