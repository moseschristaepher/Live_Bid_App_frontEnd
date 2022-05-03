

import { CHECK_USER_SIGN_IN, FETCH_CURRENT_USER, UPDATE_CURRENT_USER, UPDATE_CURRENT_USER_FAIL } from "../actions/types";


const INITIAL_STATE = {
    userToken: null,
    userId: null,
    error: null,
    isCurrentUserAuthenticated: false,
    userName: null,
    loading: false
}

const fetchCurrentUserHandler = (state, action) => {
    
    return {...state,
        isCurrentUserAuthenticated: action.isCurrentUserAuthenticated,
        loading: false,
        payload: action.payload

    }
}

const updateCurrentUserHandler = (state, action) => {
    
    return {...state,
        loading: false,
        payload: action.payload
    }
}

const updateCurrentUserFailedHandler = (state, action) => {
    
    return {...state,
        loading: false,
        error: action.error
    }
}

const checkUserSignInHandler = (state, action) => {

    return {...state,
        isCurrentUserAuthenticated: action.isUserAuthenticated,
        loading: false,
        userId: action.userId,
        payload: action.payload
    }
}


// export default (state = {}, action) => {
export default (state = INITIAL_STATE, action) => {
   switch(action.type){
       default: 
           return state;

       case FETCH_CURRENT_USER:
           return fetchCurrentUserHandler(state, action);

        case UPDATE_CURRENT_USER:
            return updateCurrentUserHandler(state, action);

        case UPDATE_CURRENT_USER_FAIL:
            return updateCurrentUserFailedHandler(state, action);

        case CHECK_USER_SIGN_IN:
            return checkUserSignInHandler(state, action);
     
   }
};