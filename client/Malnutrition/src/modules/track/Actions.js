import {URL_TRACK_HEALTH} from '../../shared/apis/APIConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_CONSTANTS} from '../../shared/constants/constants';
import {TRACK_HEALTH_ERROR, TRACK_HEALTH_SUCCESS} from '../../redux/types';

export const trackHealth = data => async dispatch => {
  const jwtToken = await AsyncStorage.getItem(ASYNC_CONSTANTS.TOKEN);
  const reqBody = {
    method: 'POST',
    Authorization: `Bearer ${jwtToken}`,
    'Content-Type': 'application/json',
  };

  fetch(URL_TRACK_HEALTH, reqBody)
    .then(response => response.json())
    .then(responseData => {
        if (responseData?.message) {
          dispatch(trackHealthSuccess(responseData?.message))
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
