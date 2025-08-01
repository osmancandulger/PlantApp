import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OnboardingState {
  hasCompletedOnboarding: boolean;
  currentStep: number;
  isLoading: boolean;
}

const initialState: OnboardingState = {
  hasCompletedOnboarding: false,
  currentStep: 0,
  isLoading: false,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setOnboardingCompleted: (state, action: PayloadAction<boolean>) => {
      state.hasCompletedOnboarding = action.payload;
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    previousStep: (state) => {
      if (state.currentStep > 0) {
        state.currentStep -= 1;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    resetOnboarding: (state) => {
      state.currentStep = 0;
      state.hasCompletedOnboarding = false;
      state.isLoading = false;
    },
  },
});

export const {
  setOnboardingCompleted,
  setCurrentStep,
  nextStep,
  previousStep,
  setLoading,
  resetOnboarding,
} = onboardingSlice.actions;

export default onboardingSlice.reducer;
