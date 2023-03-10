import {
  OTP_VERIFICATION_SUCCESS,
  OTP_VERIFICATION_ERROR,
  HIDE_API_ERROR,
  RESEND_OTP_SUCCESS,
  RESEND_OTP_ERROR,
} from '../../redux/types';
import {
  URL_OTP_VERIFICATION,
  URL_RESEND_OTP,
} from '../../shared/apis/APIConstants';

export const otpVerification = data => dispatch => {
  const reqBody = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  fetch(URL_OTP_VERIFICATION, reqBody)
    .then(response => response.json())
    .then(responseData => {
      if (responseData?.message) {
        dispatch(otpVerificationSuccess(responseData?.message));
      } else {
        dispatch(otpVerificationError(responseData?.error));
      }
    })
    .catch(error => {
      //display error message
      console.log(error, 'error');
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

export const resendOTP = data => dispatch => {
  const reqBody = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  fetch(URL_RESEND_OTP, reqBody)
    .then(response => response.json())
    .then(responseData => {
      if (responseData?.message) {
        dispatch(resendOTPSuccess(responseData?.message));
      } else {
        dispatch(resendOTPError(responseData?.error));
      }
    })
    .catch(error => {
      //display error message
      console.log(error, 'error');
    });
};

export const resendOTPSuccess = response => async dispatch => {
  dispatch({
    type: RESEND_OTP_SUCCESS,
    payload: response,
  });
};

export const resendOTPError = error => async dispatch => {
  dispatch({
    type: RESEND_OTP_ERROR,
    payload: error,
  });
};

export const hideError = () => dispatch => {
  dispatch({
    type: HIDE_API_ERROR,
    payload: '',
  });
};
