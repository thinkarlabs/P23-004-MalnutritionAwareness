import {createStackNavigator} from '@react-navigation/stack';
import ChildCardContent from '../modules/home/homeCardContent/ChildCardContent';
import ParentCardContent from '../modules/home/homeCardContent/ParentCardContent';
import WarningCardContent from '../modules/home/homeCardContent/WarningCardContent';
import Profile from '../modules/profile';
import {HOME_CARD, TAB} from '../shared/constants/navigatorConstants';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name={TAB} component={BottomTab} />
      <Stack.Screen name={HOME_CARD.CONTENT1} component={ChildCardContent} />
      <Stack.Screen name={HOME_CARD.CONTENT2} component={ParentCardContent} />
      <Stack.Screen name={HOME_CARD.CONTENT3} component={WarningCardContent} />
      <Stack.Screen name='profile' component={Profile} />
    </Stack.Navigator>
  );
}
