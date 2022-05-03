import { 
    FETCH_CURRENT_USER, 
    UPDATE_CURRENT_USER, 
    UPDATE_CURRENT_USER_FAIL} from "./types";


import jsonPlaceholder from "../apis/jsonPlaceholder";
import { errorsFromServer } from "./errorsFromServerActions";




  //////////////// UPDATE CURRENT USER ///////////////////////

  export const updateCurrentUser = (formValues, userId) => async dispatch => {

    try {
      let headers = `Bearer ${localStorage.getItem('userToken')}`;
      let Authorization = { "Authorization": `${headers}` };

      let updateRequestData = {}

      updateRequestData.userId = userId;

      console.log(formValues)

      const response = await jsonPlaceholder.put(`/auth/user/updateUser`, {...formValues, ...updateRequestData, Authorization});
    
      dispatch({
          type: UPDATE_CURRENT_USER,
          payload: response.data
      });

    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message

      dispatch(updateCurrentUserFail(message))

    }

  }


  ////////// FETCH CURRENT USER ///////////////////////////
  export const fetchCurrentUser = (formValues, userId) => async dispatch => {
    try {
      let headers = `Bearer ${localStorage.getItem('userToken')}`;
      // let userId = localStorage.getItem('userId');
      let Authorization = { "Authorization": `${headers}` };

      let body = {}

      body.userId = userId;

      const response = await jsonPlaceholder.post(`/auth/myAccount`, {...body, Authorization});
    
      dispatch({
          type: FETCH_CURRENT_USER,
          payload: response.data,
          isCurrentUserAuthenticated: response.data.isCurrentUserAuthenticated
      });

    } catch (error) {

      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message

      console.log(message)

      dispatch(errorsFromServer(message))

    }

  }


  //////////// USER UPDATE FAIL ///////////////////////////////
export const updateCurrentUserFail = (error) => async dispatch => {

  dispatch({ type: UPDATE_CURRENT_USER_FAIL, error: error})
};