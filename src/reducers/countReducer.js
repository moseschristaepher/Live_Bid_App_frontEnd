import { ADD_COUNT } from "../actions/types";


 const INITIAL_STATE = {
    totalValue: 0

}

const addCountNumber = (state, action) => {


    return {...state,
        totalValue: state.totalValue + action.count
    }
}


// export default (state = {}, action) => {
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: 
            return state;

        case ADD_COUNT:
            return addCountNumber(state, action);

    }
};
