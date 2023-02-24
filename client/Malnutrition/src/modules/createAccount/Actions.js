import { CREATE_PREGNANT_WOMEN_ACCOUNT_ERROR, CREATE_PREGNANT_WOMEN_ACCOUNT_SUCCESS } from '../../redux/types';
import { URL_CREATE_ACCOUNT } from '../../shared/apis/APIConstants';

export const createPregnantWomenAccount = (data, navigation) => (
  dispatch,
) => {
  const reqBody = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  console.log(reqBody, 'reqBody');

  fetch(URL_CREATE_ACCOUNT, reqBody)
  .then(response => response.json())
  .then(responseData => {
    console.log(responseData, 'responseData');
    dispatch(createPregnantWomenAccountSuccess(responseData));
  })
  .catch((error) => {
    //display error message
    console.log(error, 'error');
    dispatch(createPregnantWomenAccountError(error));
  });
};

export const createPregnantWomenAccountSuccess = (response) => async (dispatch) => {
    dispatch({
        type: CREATE_PREGNANT_WOMEN_ACCOUNT_SUCCESS,
        payload: response,
      });
};

export const createPregnantWomenAccountError = (error) => async (dispatch) => {
    dispatch({
        type: CREATE_PREGNANT_WOMEN_ACCOUNT_ERROR,
        payload: error,
      });
};
