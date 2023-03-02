import { OTP_VERIFICATION_SUCCESS, OTP_VERIFICATION_ERROR } from "../../redux/types";
import { URL_OTP_VERIFICATION } from "../../shared/apis/APIConstants";
import { HOME } from "../../shared/constants/navigatorConstants";

export const otpVerification = (data, navigation) => dispatch => {
    const reqBody = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    console.log(reqBody, 'data');
    fetch(URL_OTP_VERIFICATION, reqBody)
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData, 'responseData');
      if (responseData?.message){
        dispatch(otpVerificationSuccess(responseData?.message));
        navigation.navigate(HOME);
      }
      else{
        dispatch(otpVerificationError(responseData?.error))
      }
      
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