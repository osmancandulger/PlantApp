export interface User {
  id: string;
  name: string;
  email?: string;
  hasCompletedOnboarding: boolean;
}

export interface Plant {
  id: string;
  name: string;
  image: string;
  category: string;
  description?: string;
}

export interface NavigationProps {
  navigation: any;
  route: any;
}
