import {
  HIDE_API_ERROR,
  OTP_VERIFICATION_ERROR,
  OTP_VERIFICATION_SUCCESS,
  RESEND_OTP_ERROR,
  RESEND_OTP_SUCCESS,
} from '../../redux/types';

const INITIAL_STATE = {
  loading: false,
  errorText: '',
  verifyOtpData: '',
  resendOtpData: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case OTP_VERIFICATION_SUCCESS:
      return {
        ...INITIAL_STATE,
        ...state,
        verifyOtpData: action.payload,
        errorText: '',
      };
    case OTP_VERIFICATION_ERROR:
      return {...INITIAL_STATE, ...state, errorText: action.payload};
    case RESEND_OTP_SUCCESS:
      return {
        ...INITIAL_STATE,
        ...state,
        resendOtpData: action.payload,
        errorText: '',
      };
    case RESEND_OTP_ERROR:
      return {...INITIAL_STATE, ...state, errorText: action.payload};
    case HIDE_API_ERROR:
      return {...INITIAL_STATE, errorText: action.payload};
    default:
      return state;
  }
};
