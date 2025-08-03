export type RootStackParamList = {
  OnboardingStack: undefined;
  TabNavigator: undefined;
};

export type OnboardingStackParamList = {
  Welcome: undefined;
  Identify: undefined;
  PayWall: undefined;
};

export type TabNavigatorParamList = {
  index: undefined;
  Home: undefined;
  Diagnose: undefined;
  Scanner: undefined;
  MyGarden: undefined;
  Profile: undefined;
};

export type SecureStackParamList = {
  TabsNavigator: undefined;
  Settings: undefined;
  PayWall: undefined;
  QuestionDetail: {
    uri: string;
  };
};
