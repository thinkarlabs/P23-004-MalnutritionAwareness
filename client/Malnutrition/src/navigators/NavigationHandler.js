import {NavigationActions} from 'react-navigation';
import {RECEIVE_PARAM} from '../redux/Types';

export const navigateToScreen = (navigation, route, param? = null) => {
  const navigateAction = NavigationActions.navigate({
    routeName: route,
    params: param,
  });
  navigation.dispatch(navigateAction);
};

export const navigateToPrevious = (navigation, param? = null) => {
  const navigateBack = NavigationActions.back({
    params: param,
  });
  navigation.dispatch(navigateBack);
};

export const navigateUsingDispatch = (navigation, route, param? = null) => (
  dispatch,
) => {
  dispatch({
    type: RECEIVE_PARAM,
    payload: param,
  });
  const navigateAction = NavigationActions.navigate({
    routeName: route,
  });
  navigation.dispatch(navigateAction);
};
