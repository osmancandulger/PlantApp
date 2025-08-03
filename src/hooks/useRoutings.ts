import {
  createNavigationContainerRef,
  ParamListBase,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const navigationRef = createNavigationContainerRef<ParamListBase>();

type Routings = {
  push: (route: keyof ParamListBase, props?: Record<string, any>) => void;
  goBack: () => void;
  replace: (route: keyof ParamListBase, props?: Record<string, any>) => void;
};

export default function useRouting(): Routings {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const routings: Routings = {
    push: (route, props) => {
      navigation.navigate(route, props);
    },
    replace: (route, props) => {
      navigationRef.dispatch(StackActions.replace(route as string, props));
    },
    goBack: () => {
      if (navigationRef.canGoBack()) {
        navigationRef.goBack();
      }
    },
  };

  return routings;
}
