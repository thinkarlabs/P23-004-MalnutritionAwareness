import { CREATE_PREGNANT_WOMEN_ACCOUNT_ERROR, CREATE_PREGNANT_WOMEN_ACCOUNT_SUCCESS } from '../../redux/types';
import { URL_CREATE_ACCOUNT } from '../../shared/apis/APIConstants';
import { postCall } from '../../shared/apis/HttpCall';

// export const createPregnantWomenAccount = ({data}) => (
//     dispatch,
//   ) => {
//     postCall(URL_CREATE_ACCOUNT, data)
//       .then((response) => {
//         console.log(response, 'response');
//         dispatch(createPregnantWomenAccountSuccess(response));
//       })
//       .catch((error) => {
//         console.log(error, 'error');
//         dispatch(createPregnantWomenAccountError(error));
//       });
//   };

export const createPregnantWomenAccount = (data) => (
  dispatch,
) => {
  console.log(data);
  fetch(URL_CREATE_ACCOUNT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
  // .then((response) => {
  //   console.log(response, 'response');
  //   dispatch(createPregnantWomenAccountSuccess(response));
  // })
  .then(responseData => {
    console.log(responseData, 'responseData');
    dispatch(createPregnantWomenAccountSuccess(responseData));
  })
  .catch((error) => {
    //display error message
    console.log(error, 'error');
    dispatch(createPregnantWomenAccountError(error));
  });
};

export const createPregnantWomenAccountSuccess = (response) => async (dispatch) => {
    dispatch({
        type: CREATE_PREGNANT_WOMEN_ACCOUNT_SUCCESS,
        payload: response,
      });
};

export const createPregnantWomenAccountError = (error) => async (dispatch) => {
    dispatch({
        type: CREATE_PREGNANT_WOMEN_ACCOUNT_ERROR,
        payload: error,
      });
};
