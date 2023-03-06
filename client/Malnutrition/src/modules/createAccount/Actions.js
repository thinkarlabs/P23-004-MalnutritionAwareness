import {
  CREATE_PREGNANT_WOMEN_ACCOUNT_ERROR,
  CREATE_PREGNANT_WOMEN_ACCOUNT_SUCCESS,
  HIDE_API_ERROR,
} from '../../redux/types';
import {URL_CREATE_ACCOUNT} from '../../shared/apis/APIConstants';

export const createPregnantWomenAccount = (data, navigation) => dispatch => {
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
        dispatch(createPregnantWomenAccountSuccess(responseData?.message));
      } else {
        dispatch(createPregnantWomenAccountError(responseData?.error));
      }
    })
    .catch(error => {
      //display error message
      console.log(error, 'error');
    });
};

export const createPregnantWomenAccountSuccess = response => dispatch => {
  dispatch({
    type: CREATE_PREGNANT_WOMEN_ACCOUNT_SUCCESS,
    payload: response,
  });
};

export const createPregnantWomenAccountError = error => dispatch => {
  dispatch({
    type: CREATE_PREGNANT_WOMEN_ACCOUNT_ERROR,
    payload: error,
  });
};

export const hideError = () => dispatch => {
  dispatch({
    type: HIDE_API_ERROR,
    payload: '',
  });
};
