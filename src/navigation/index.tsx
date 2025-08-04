import React, { useEffect } from 'react';
import NonSecureStackNavigation from './nonsecure/StackNavigator';
import SecureStackNavigation from './secure/StackNavigator';
import { useAppDispatch, useAppSelector } from ':store/hooks';
import { getOnboardingStatus } from ':store/slices/userSlice';

const Navigation: React.FC = () => {
  const hasCompletedOnboarding = useAppSelector((state) => state.user.hasCompletedOnboarding);
  const loading = useAppSelector((state) => state.user.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getOnboardingStatus());
  }, [dispatch]);

  if (loading) {
    return null;
  }

  if (hasCompletedOnboarding) {
    return <SecureStackNavigation />;
  }
  return <NonSecureStackNavigation />;
};
export default Navigation;
