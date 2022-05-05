import { ERRORS_FROM_SERVER } from "../actions/types";


 const INITIAL_STATE = {

    serverError: null,
    loading: false
}

const errorsFromServerHandler = (state, action) => {
    return { ...state,  
        serverError: action.serverError,
        loading: false
    };
};


// export default (state = {}, action) => {
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: 
            return state;

        case ERRORS_FROM_SERVER:
            return errorsFromServerHandler(state, action);

    }
};