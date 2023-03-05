import {
  HIDE_API_ERROR,
  OTP_VERIFICATION_ERROR,
  OTP_VERIFICATION_SUCCESS,
} from '../../redux/types';

const INITIAL_STATE = {
  loading: false,
  errorText: '',
  verifyOtpData: '',
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
    case HIDE_API_ERROR:
      return {...INITIAL_STATE, errorText: action.payload};
    default:
      return state;
  }
};
