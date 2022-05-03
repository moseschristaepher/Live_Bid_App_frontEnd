import { ERRORS_FROM_SERVER } from "./types";





  ///////////////// ERRORS FROM THE SERVERS OR BACKEND ///////////////
  export const errorsFromServer = (error) => async dispatch => {
      
    dispatch({ type: ERRORS_FROM_SERVER, serverError: error})
  };