import {
  HOMESCREEN_SYNC_SUCCESS,
  HOMESCREEN_SYNC_ERROR,
  ACCESS_TOKEN,
} from '../../redux/types';

const INITIAL_STATE = {
  loading: false,
  errorText: '',
  syncData: {},
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case HOMESCREEN_SYNC_SUCCESS:
      return {
        ...INITIAL_STATE,
        ...state,
        syncData: action.payload,
        errorText: '',
      };
    case HOMESCREEN_SYNC_ERROR:
      return {
        ...INITIAL_STATE,
        ...state,
        errorText: action.payload,
      };
    default:
      return state;
  }
};
