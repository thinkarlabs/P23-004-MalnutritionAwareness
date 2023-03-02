import { combineReducers } from 'redux';
import CreateAccountReducer from '../modules/createAccount/CreateAccountReducer';
import VerifyOTPReducer from '../modules/otpVerification/VerifyOTPReducer';

const appReducer = combineReducers({
  createAccount: CreateAccountReducer,
  otpVerification: VerifyOTPReducer,
});

export const rootReducer = () => {
  return appReducer();
};
