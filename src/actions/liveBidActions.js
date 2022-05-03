import { FETCH_LIVE_BID_DATA } from "./types";

import jsonPlaceholder from "../apis/jsonPlaceholder";
import history from "../reducers/history";
import { userAuthSuccess } from "./userAuthActions";




//////// FETCH THE DATA IN THE LIVE BID ///////////

export const fetchLiveBidData = (formValues, userId)=> async (dispatch) =>{
    let headers = `Bearer ${localStorage.getItem('userToken')}`;
    let Authorization = { "Authorization": `${headers}` };

    console.log("live bid data hooks called here")
    console.log({...formValues}, userId, Authorization)
    const response = await jsonPlaceholder.post(`/`, {Authorization});
  
    console.log(response)
    dispatch({
        type: FETCH_LIVE_BID_DATA,
        payload: response.data
    });
  
    if (response?.data?.isUserAuthenticated) {

        let userId = response.data?.userId;
        let isUserAuthenticated = response.data?.isUserAuthenticated;
        let userName = response.data?.userName
        console.log(isUserAuthenticated)
        let userToken = localStorage.getItem('userToken');
        dispatch(userAuthSuccess(userToken, userId, isUserAuthenticated, userName));


    } else {

        history.push('/auth/userLogin')

        window.location.reload(false)

    }
  };