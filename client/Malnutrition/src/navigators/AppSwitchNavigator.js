import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Splash from '../modules/splash';

const SplashStack = createStackNavigator(
    {
      Splash: Splash,
    },
    {
      headerMode: 'none',
      defaultNavigationOptions: {
        gesturesEnabled: false,
      },
    },
  );

  const AppSwitchNavigator = createSwitchNavigator(
    {
      Splash: SplashStack,
    },
    {
      initialRouteName: 'Splash',
    },
  );
  
  export default createAppContainer(AppSwitchNavigator);
  