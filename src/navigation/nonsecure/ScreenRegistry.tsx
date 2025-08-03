import { ScreenNames } from ':enums/screens';
import { WelcomeScreen, PayWallScreen, OnboardingScreen } from ':pages/';

type NavigationScreenProps = {
  name: string;
  component: React.ComponentType<any> | null;
  options: any;
};

export const ScreenRegistry: NavigationScreenProps[] = [
  {
    name: ScreenNames.WELCOME,
    component: WelcomeScreen,
    options: {
      title: '',
      headerShown: false,
    },
  },
  {
    name: ScreenNames.ONBOARDING,
    component: OnboardingScreen,
    options: {
      title: '',
      headerShown: false,
    },
  },

  {
    name: ScreenNames.PAYWALL,
    component: PayWallScreen,
    options: {
      title: '',
      headerShown: false,
    },
  },
];
