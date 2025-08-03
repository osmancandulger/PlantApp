import React, { useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setOnboardingCompleted } from '../store/slices/userSlice';
import NonSecureStackNavigation from './nonsecure/StackNavigator';
import SecureStackNavigation from './secure/StackNavigator';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const hasCompletedOnboarding = useSelector(
    (state: RootState) => state.user.hasCompletedOnboarding,
  );
  const [isLoading, setIsLoading] = useState(true);

  const checkOnboardingStatus = useCallback(async () => {
    try {
      const onboardingCompleted = await AsyncStorage.getItem('onboardingCompleted');
      const completed = onboardingCompleted === 'true';
      dispatch(setOnboardingCompleted(completed));
    } catch (error) {
      console.error('Error checking onboarding status:', error);
      dispatch(setOnboardingCompleted(false));
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    checkOnboardingStatus();
  }, [checkOnboardingStatus]);

  if (isLoading) {
    return null;
  }

  if (hasCompletedOnboarding) {
    return <SecureStackNavigation />;
  }
  return <NonSecureStackNavigation />;
};
export default Navigation;
