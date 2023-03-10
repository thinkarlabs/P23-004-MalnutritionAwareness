import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  HOMESCREEN_SYNC_ERROR,
  HOMESCREEN_SYNC_SUCCESS,
} from '../../redux/types';
import {URL_SYNC} from '../../shared/apis/APIConstants';

export const homeScreenSync = () => async dispatch => {
  const jwtToken = await AsyncStorage.getItem('TOKEN');
  const reqBody = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json',
    },
  };

  fetch(URL_SYNC, reqBody)
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData, 'responseData');
      dispatch(homeScreenSyncSuccess(responseData));
    })
    .catch(error => {
      console.log(error, 'error');
      dispatch(homeScreenSyncError(error));
    });
};

export const homeScreenSyncSuccess = response => dispatch => {
  dispatch({
    type: HOMESCREEN_SYNC_SUCCESS,
    payload: response,
  });
};

export const homeScreenSyncError = error => dispatch => {
  dispatch({
    type: HOMESCREEN_SYNC_ERROR,
    payload: error,
  });
};
