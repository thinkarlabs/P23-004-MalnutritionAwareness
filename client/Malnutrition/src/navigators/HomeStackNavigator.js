import {createStackNavigator} from '@react-navigation/stack';
import ChildCardContent from '../modules/home/homeCardContent/ChildCardContent';
import ParentCardContent from '../modules/home/homeCardContent/ParentCardContent';
import WarningCardContent from '../modules/home/homeCardContent/WarningCardContent';
import {HOME_CARD, TAB} from '../shared/constants/navigatorConstants';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TAB} component={BottomTab} />
      <Stack.Screen name={HOME_CARD.CONTENT1} component={ChildCardContent} />
      <Stack.Screen name={HOME_CARD.CONTENT2} component={ParentCardContent} />
      <Stack.Screen name={HOME_CARD.CONTENT3} component={WarningCardContent} />
    </Stack.Navigator>
  );
}
