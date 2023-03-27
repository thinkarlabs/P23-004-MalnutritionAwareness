import {combineReducers} from 'redux';
import CreateAccountReducer from '../modules/createAccount/CreateAccountReducer';
import HomeScreenReducer from '../modules/home/HomeScreenReducer';
import LoginReducer from '../modules/login/LoginReducer';
import OtpReducer from '../modules/otpVerification/otpReducer';
import TrackHealthReducer from '../modules/track/TrackHealthReducer';

const appReducer = combineReducers({
  createAccount: CreateAccountReducer,
  otpVerification: OtpReducer,
  login: LoginReducer,
  homeScreen: HomeScreenReducer,
  trackHealth: TrackHealthReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
