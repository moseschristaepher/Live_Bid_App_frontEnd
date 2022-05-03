import { ADD_COUNT } from "./types";






/////// ADD A NUMBER 5 //////

export const addCountNumber = () => async dispatch => {

    dispatch({
        type: ADD_COUNT, 
        count: 5
    });
};