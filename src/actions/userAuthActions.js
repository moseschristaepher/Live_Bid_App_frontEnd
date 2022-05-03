import { CHECK_USER_SIGN_IN, USER_AUTH_FAIL, USER_AUTH_SUCCESS, USER_LOGOUT } from "./types";



import jsonPlaceholder from "../apis/jsonPlaceholder";
import history from "../reducers/history";



/////////// USER LOGOUT ///////////
export const userLogout = (formValues, userId)=> async (dispatch) =>{


    await localStorage.removeItem('userToken')

    await localStorage.removeItem('userId')

    dispatch({ type: USER_LOGOUT })

    document.location.href = '/'


};



/////////// USER LOGIN ///////////

///////////////////////// USER LOGIN ACTIONS //////////////////
export const userLogin = (formValues, userId)=> async (dispatch) =>{

    try {
  
      const response = await jsonPlaceholder.post('auth/userLogin', {...formValues});  
  
      const userToken = await response?.data?.token;
  
      const userId = await response?.data?.userId;
  
      await localStorage.setItem('userToken', response?.data?.token)
  
      await localStorage.setItem('userId', response?.data?.userId)
  
      if (response?.data) {
  
        dispatch(userAuthSuccess(userToken, userId, { isUserAuthenticated: response?.data?.isUserAuthenticated }));
  
        document.location.href = '/'
  
  
        } else {
  
            history.push('/login')
  
        }
  
    } catch (error) {
  
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    
      dispatch(userAuthFail(message));
  
    }
  
};
  
  
/////// AFTER USER SUCCESS AND FAILURE CASE OF THE LOGIN CASE /////////

export const userAuthSuccess = (token, userId, isUserAuthenticated, userName) => async dispatch => {

    await dispatch({ type: USER_AUTH_SUCCESS, idToken: token, userId: userId, isUserAuthenticated: isUserAuthenticated, userName: userName})
};

//////////// USER AUTH FAIL ///////////////////////////////
export const userAuthFail = (error) => async dispatch => {

    dispatch({ type: USER_AUTH_FAIL, error: error})
};


////// CHECK USER SIGN IN STATE ///////

export const checkUserSignIn = (formValues)=> async (dispatch) =>{


    let headers = `Bearer ${localStorage.getItem('userToken')}`;
    let Authorization = { "Authorization": `${headers}` };

    const response = await jsonPlaceholder.post(`auth/checkUserSignIn`, {Authorization});

    dispatch({ type: CHECK_USER_SIGN_IN, payload: response.data, userId: response.data.currentUserId, isUserAuthenticated: response.data.isUserAuthenticated });

};
