import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {jobApi} from '../../services/jobApi';


export const fetchJobs = createAsyncThunk(
  'jobs/fetchAll',
  async (filters = {}, { rejectWithValue }) => {
    try {
      const response = await jobApi.getAllJobs(filters);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const addJob = createAsyncThunk(
  'jobs/addJob',
  async (jobData, { rejectWithValue }) => {
    try {
      const response = await jobApi.addJob(jobData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const updateJobStatus = createAsyncThunk(
  'jobs/updateStatus',
  async ({ jobId, status }, { rejectWithValue }) => {
    try {
      const response = await jobApi.updateJobStatus(jobId, status);
      return { jobId, status, updatedJob: response };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const deleteJob = createAsyncThunk(
  'jobs/deleteJob',
  async (jobId, { rejectWithValue }) => {
    try {
      await jobApi.deleteJob(jobId);
      return jobId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  jobs: [],
  isLoading: false,
  error: null,
  filters: {
    status: '',
    date: '',
  },
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    clearFilters: (state) => {
      state.filters = {
        status: '',
        date: '',
      };
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      
      .addCase(addJob.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs.push(action.payload);
      })
      .addCase(addJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      
      .addCase(updateJobStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateJobStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        const { jobId, status } = action.payload;
        const jobIndex = state.jobs.findIndex(job => job._id === jobId);
        if (jobIndex !== -1) {
          state.jobs[jobIndex].status = status;
        }
      })
      .addCase(updateJobStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      
      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = state.jobs.filter(job => job._id !== action.payload);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilter, clearFilters, clearError } = jobSlice.actions;
export default jobSlice.reducer;