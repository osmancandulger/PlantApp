import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
  loading: boolean;
}
export const getOnboardingStatus = createAsyncThunk('onboarding/loadStatus', async () => {
  const value = await AsyncStorage.getItem('onboardingCompleted');
  return value === 'true';
});

export const setOnboardingStatus = createAsyncThunk(
  'onboarding/setStatus',
  async (value: boolean) => {
    await AsyncStorage.setItem('onboardingCompleted', value.toString());
    return value;
  },
);

const initialState: UserState = {
  currentUser: null,
  isAuthenticated: false,
  hasCompletedOnboarding: false,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload };
      }
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.hasCompletedOnboarding = false;
    },
    setOnboardingCompleted: (state, action: PayloadAction<boolean>) => {
      state.hasCompletedOnboarding = action.payload;
      if (state.currentUser) {
        state.currentUser.hasCompletedOnboarding = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOnboardingStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOnboardingStatus.fulfilled, (state, action: PayloadAction<boolean>) => {
        state.loading = false;
        state.hasCompletedOnboarding = action.payload;
      })
      .addCase(setOnboardingStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(setOnboardingStatus.fulfilled, (state, action: PayloadAction<boolean>) => {
        state.hasCompletedOnboarding = action.payload;
        state.loading = false;
      });
  },
});

export const { setUser, updateUser, logout, setOnboardingCompleted } = userSlice.actions;
export default userSlice.reducer;
