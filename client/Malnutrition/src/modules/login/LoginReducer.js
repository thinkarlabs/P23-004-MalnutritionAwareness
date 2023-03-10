import {HIDE_API_ERROR, LOGIN_ERROR, LOGIN_SUCCESS} from '../../redux/types';

const INITIAL_STATE = {
  loading: false,
  errorText: '',
  loginData: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...INITIAL_STATE,
        ...state,
        loginData: action.payload,
        errorText: '',
      };
    case LOGIN_ERROR:
      return {...INITIAL_STATE, ...state, errorText: action.payload};
    case HIDE_API_ERROR:
      return {...INITIAL_STATE, errorText: action.payload};
    default:
      return state;
  }
};
