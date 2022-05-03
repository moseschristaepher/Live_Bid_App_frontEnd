import { 
    USER_AUTH_FAIL, 
    USER_AUTH_SUCCESS, 
    USER_LOGOUT } from "../actions/types";



 const INITIAL_STATE = {
    userToken: null,
    userId: null,
    error: null,
    isUserAuthenticated: false,
    userName: null,
    loading: false
}

const userAuthSuccessHandler = (state, action) => {
    return { ...state,  
        userToken: action.idToken, 
        userId: action.userId,
        isUserAuthenticated: action.isUserAuthenticated,
        userName: action.userName,
        error: null,
        loading: false
    };
};

const userAuthFailHandler = (state, action) => {
    return { ...state,  
        error: action.error, 
        loading: false  
    };
};

const userLogoutHandler = (state, action) => {
    return { ...state,  
        userToken: null,
        userId: null,
        error: null,
        isUserAuthenticated: false,
        userName: null,
        loading: false
    };
};

// export default (state = {}, action) => {
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: 
            return state;

        case USER_AUTH_SUCCESS:
            return userAuthSuccessHandler(state, action);

        case USER_AUTH_FAIL:
            return userAuthFailHandler(state, action);

        case USER_LOGOUT:
            return userLogoutHandler(state, action);

    }
};