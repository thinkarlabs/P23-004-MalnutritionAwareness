import { OTP_VERIFICATION_SUCCESS, OTP_VERIFICATION_ERROR } from "../../redux/types";
import { HOME } from "../../shared/constants/navigatorConstants";

export const otpVerification = (data, navigation) => dispatch => {
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
      dispatch(otpVerificationSuccess(responseData));
      navigation.navigate(HOME);
    })
    .catch(error => {
      //display error message
      console.log(error, 'error');
      dispatch(otpVerificationError(error));
    });
};

export const otpVerificationSuccess = response => async dispatch => {
  dispatch({
    type: OTP_VERIFICATION_SUCCESS,
    payload: response,
  });
};

export const otpVerificationError = error => async dispatch => {
  dispatch({
    type: OTP_VERIFICATION_ERROR,
    payload: error,
  });
};