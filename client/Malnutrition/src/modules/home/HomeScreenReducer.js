import {
    HOMESCREEN_SYNC_SUCCESS,
    HOMESCREEN_SYNC_ERROR
} from '../../redux/types';

const INITIAL_STATE = {
    loading: false,
    errorText: '',
    userData: '',
};

export default (state = INITIAL_STATE, action =  {}) => {
    switch(action.type) {
        case HOMESCREEN_SYNC_SUCCESS:
            return {
                ...INITIAL_STATE,
                ...state,
                userData: action.payload,
                errorText: '',
            };
        case HOMESCREEN_SYNC_ERROR: 
            return {
                ...INITIAL_STATE,
                ...state,
                errorText: action.payload,
                userData: '',
            };
            default:
                return state;

    }
};