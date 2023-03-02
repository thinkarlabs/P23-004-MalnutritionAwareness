import { OTP_VERIFICATION_ERROR, OTP_VERIFICATION_SUCCESS } from '../../redux/types';

  const INITIAL_STATE = {
    loading: false,
    errorText: '',
  };

  export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
      case OTP_VERIFICATION_SUCCESS:
        return {
          ...INITIAL_STATE,
          ...state,
        };
      case OTP_VERIFICATION_ERROR:
        return {...INITIAL_STATE, ...state, errorText: action.payload};
      default:
        return state;
    }
  };
