import {URL_TRACK_HEALTH} from '../../shared/apis/APIConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_CONSTANTS} from '../../shared/constants/constants';
import {TRACK_HEALTH_ERROR, TRACK_HEALTH_SUCCESS} from '../../redux/types';

export const trackHealth = data => async dispatch => {
  const jwtToken = await AsyncStorage.getItem(ASYNC_CONSTANTS.TOKEN);
  console.log(jwtToken, 'jwtToken');
  const reqBody = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  fetch(URL_TRACK_HEALTH, reqBody)
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData, 'responseData');
      if (responseData?.message) {
        dispatch(trackHealthSuccess(responseData));
      } else {
        dispatch(trackHealthError(responseData?.error));
      }
    })
    .catch(error => {
      console.log('error', error);
    });
};

export const trackHealthSuccess = response => dispatch => {
  dispatch({
    type: TRACK_HEALTH_SUCCESS,
    payload: response,
  });
};

export const trackHealthError = response => dispatch => {
  dispatch({
    type: TRACK_HEALTH_ERROR,
    payload: response,
  });
};
