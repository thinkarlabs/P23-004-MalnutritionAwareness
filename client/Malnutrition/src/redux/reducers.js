import {combineReducers} from 'redux';
import CreateAccountReducer from '../modules/createAccount/CreateAccountReducer';
import HomeScreenReducer from '../modules/home/HomeScreenReducer';
import LoginReducer from '../modules/login/LoginReducer';
import OtpReducer from '../modules/otpVerification/otpReducer';

const appReducer = combineReducers({
  createAccount: CreateAccountReducer,
  otpVerification: OtpReducer,
  login: LoginReducer,
  homeScreen: HomeScreenReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
