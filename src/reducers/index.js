import { combineReducers } from "redux";

import { reducer as formReducer } from 'redux-form';

import countReducer from './countReducer';

import userAuthReducer from './userAuthReducer';

import currentUserProfileReducer from './currentUserProfileReducer';

import errorsFromServerReducer from './errorFromServer';

const rootReducer = combineReducers({

  totalCountedValue: countReducer,

  isUserLogined: userAuthReducer,

  currentUserProfile: currentUserProfileReducer,

  errorsFromServer: errorsFromServerReducer,

  form: formReducer

});


export default rootReducer;
