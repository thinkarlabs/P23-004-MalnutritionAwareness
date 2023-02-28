import { combineReducers } from 'redux';
import CreateAccountReducer from '../modules/createAccount/CreateAccountReducer';

const appReducer = combineReducers({
  createAccount: CreateAccountReducer,
});

export const rootReducer = () => {
  return appReducer();
};
