import {
  CREATE_PREGNANT_WOMEN_ACCOUNT_ERROR,
  CREATE_PREGNANT_WOMEN_ACCOUNT_SUCCESS,
} from '../../redux/types';
import {URL_CREATE_ACCOUNT} from '../../shared/apis/APIConstants';
import {OTPVERIFICATION} from '../../shared/constants/navigatorConstants';

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
      console.log(responseData, 'responseData');
      
      if (responseData?.message){
        dispatch(createPregnantWomenAccountSuccess(responseData?.message));
        navigation.navigate(OTPVERIFICATION,{
          phone_number : data.phone_number,
          is_creation : false,
        });
      }
      else{
        dispatch(createPregnantWomenAccountError(responseData?.error))
      }
      
    })
    .catch(error => {
      //display error message
      console.log(error, 'error');
    });
};

export const createPregnantWomenAccountSuccess = response => async dispatch => {
  dispatch({
    type: CREATE_PREGNANT_WOMEN_ACCOUNT_SUCCESS,
    payload: response,
  });
};

export const createPregnantWomenAccountError = error => async dispatch => {
  dispatch({
    type: CREATE_PREGNANT_WOMEN_ACCOUNT_ERROR,
    payload: error,
  });
};
