import {
  HOMESCREEN_SYNC_ERROR,
  HOMESCREEN_SYNC_SUCCESS,
} from '../../redux/types';
import {URL_HOMESCREEN} from '../../shared/apis/APIConstants';

export const homeScreenSync = data => dispatch => {
  const reqBody = {
    method: 'GET',
    headers: {
      'Auth': '',
      'Content-Type': 'application/json',
    },
    body: data,
  };

  fetch(URL_HOMESCREEN, reqBody)
    .then(response => response.json())
    .then(responseData => {
      dispatch(homeScreenSyncSuccess(responseData));
    })
    .catch(error => {
      dispatch(homeScreenSyncError(responseData));
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
