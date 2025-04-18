
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../services/authApi';


export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
      try {
        const response = await authApi.register(userData);
        
        if(response.error){
          return rejectWithValue(response.message);
        }
        
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await authApi.login(credentials);
        
        if(response.error){
          return rejectWithValue(response.message);
        }
        
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


const token = localStorage.getItem('token');

const initialState = {
  token: token,
  isAuthenticated: !!token,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      //state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register cases
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state,action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Login cases
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        //state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;





