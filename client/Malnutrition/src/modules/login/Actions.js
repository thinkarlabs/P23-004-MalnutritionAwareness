import {HIDE_API_ERROR, LOGIN_ERROR, LOGIN_SUCCESS} from '../../redux/types';
import {URL_LOGIN} from '../../shared/apis/APIConstants';

export const login = data => dispatch => {
  const reqBody = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  fetch(URL_LOGIN, reqBody)
    .then(response => response.json())
    .then(responseData => {
      if (responseData?.message) {
        dispatch(loginSuccess(responseData?.message));
      } else {
        dispatch(loginError(responseData?.error));
      }
    })
    .catch(error => {
      //display error message
      console.log(error, 'error');
    });
};

export const loginSuccess = response => dispatch => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: response,
  });
};

export const loginError = error => dispatch => {
  dispatch({
    type: LOGIN_ERROR,
    payload: error,
  });
};

export const hideError = () => dispatch => {
  dispatch({
    type: HIDE_API_ERROR,
    payload: '',
  });
};
