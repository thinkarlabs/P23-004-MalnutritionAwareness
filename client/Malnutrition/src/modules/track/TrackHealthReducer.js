import {TRACK_HEALTH_ERROR, TRACK_HEALTH_SUCCESS} from '../../redux/types';

const INITIAL_STATE = {
  loading: false,
  errorText: '',
  trackHealthData: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case TRACK_HEALTH_SUCCESS:
      return {
        ...INITIAL_STATE,
        ...state,
        trackHealthData: action.payload,
        errorText: '',
      };
    case TRACK_HEALTH_ERROR:
      return {
        ...INITIAL_STATE,
        ...state,
        trackHealthData: '',
        errorText: action.payload,
      };
    default:
      return state;
  }
};
