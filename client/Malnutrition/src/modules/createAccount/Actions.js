import {
  CREATE_ACCOUNT_ERROR,
  CREATE_ACCOUNT_SUCCESS,
  HIDE_API_ERROR,
} from '../../redux/types';
import {URL_CREATE_ACCOUNT} from '../../shared/apis/APIConstants';

export const createAccount = data => dispatch => {
  const reqBody = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  fetch(URL_CREATE_ACCOUNT, reqBody)
    .then(response => response.json())
    .then(responseData => {
      if (responseData?.message) {
        dispatch(createAccountSuccess(responseData?.message));
      } else {
        dispatch(createAccountError(responseData?.error));
      }
    })
    .catch(error => {
      //display error message
      console.log(error, 'error');
    });
};

export const createAccountSuccess = response => dispatch => {
  dispatch({
    type: CREATE_ACCOUNT_SUCCESS,
    payload: response,
  });
};

export const createAccountError = error => dispatch => {
  dispatch({
    type: CREATE_ACCOUNT_ERROR,
    payload: error,
  });
};

export const hideError = () => dispatch => {
  dispatch({
    type: HIDE_API_ERROR,
    payload: '',
  });
};
