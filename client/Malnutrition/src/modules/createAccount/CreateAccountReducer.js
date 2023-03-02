import {
  CREATE_PREGNANT_WOMEN_ACCOUNT_ERROR,
  CREATE_PREGNANT_WOMEN_ACCOUNT_SUCCESS,
} from '../../redux/types';

const INITIAL_STATE = {
  loading: false,
  errorText: '',
  pregnantWomanData: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CREATE_PREGNANT_WOMEN_ACCOUNT_SUCCESS:
      return {
        ...INITIAL_STATE,
        ...state,
        pregnantWomanData: action.payload,
      };
    case CREATE_PREGNANT_WOMEN_ACCOUNT_ERROR:
      return {...INITIAL_STATE, ...state, errorText: action.payload};
    default:
      return state;
  }
};
