import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NonSecureStackNavigation from './nonsecure/StackNavigator';
import SecureStackNavigation from './secure/StackNavigator';

const Navigation: React.FC = () => {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const onboardingCompleted = await AsyncStorage.getItem('onboardingCompleted');
      setHasCompletedOnboarding(onboardingCompleted === 'true');
    } catch (error) {
      console.error('Error checking onboarding status:', error);
      setHasCompletedOnboarding(false);
    }
  };

  // Loading state
  // if (hasCompletedOnboarding === null) {
  //   return null; // or loading component
  // }

  // Show secure (tabs) or nonsecure (onboarding) navigation
  if (false) {
    return SecureStackNavigation();
  }
  return NonSecureStackNavigation();
};
export default Navigation;
