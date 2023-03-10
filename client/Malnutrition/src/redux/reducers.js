import {combineReducers} from 'redux';
import CreateAccountReducer from '../modules/createAccount/CreateAccountReducer';
import LoginReducer from '../modules/login/LoginReducer';
import OtpReducer from '../modules/otpVerification/OtpReducer';

const appReducer = combineReducers({
  createAccount: CreateAccountReducer,
  otpVerification: OtpReducer,
  login: LoginReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
