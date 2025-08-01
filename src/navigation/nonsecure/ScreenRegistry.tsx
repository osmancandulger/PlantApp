import { ScreenNames } from ':enums/screens';
import { WelcomeScreen, IdentifyScreen, CareGuidesScreen, PayWallScreen } from ':pages/';
import OnboardingScreen from '../../screens/onboarding/OnboardingScreen';

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
    name: ScreenNames.IDENTIFY,
    component: IdentifyScreen,
    options: {
      title: '',
      headerShown: false,
    },
  },
  {
    name: ScreenNames.CARE_GUIDES,
    component: CareGuidesScreen,
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
  {
    name: ScreenNames.ONBOARDING,
    component: OnboardingScreen,
    options: {},
  },
];
