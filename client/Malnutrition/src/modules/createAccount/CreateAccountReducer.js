import {
  CREATE_ACCOUNT_ERROR,
  CREATE_ACCOUNT_SUCCESS,
  HIDE_API_ERROR,
} from '../../redux/types';

const INITIAL_STATE = {
  loading: false,
  errorText: '',
  createAccountData: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...INITIAL_STATE,
        ...state,
        createAccountData: action.payload,
        errorText: '',
      };
    case CREATE_ACCOUNT_ERROR:
      return {
        ...INITIAL_STATE,
        ...state,
        errorText: action.payload,
        createAccountData: '',
      };
    case HIDE_API_ERROR:
      return {...INITIAL_STATE, errorText: action.payload};
    default:
      return state;
  }
};
