import {combineReducers} from 'redux';
import CreateAccountReducer from '../modules/createAccount/CreateAccountReducer';
import VerifyOTPReducer from '../modules/otpVerification/otpReducer';

const appReducer = combineReducers({
  createAccount: CreateAccountReducer,
  otpVerification: VerifyOTPReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
