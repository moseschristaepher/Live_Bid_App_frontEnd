
import { Router, Route, Switch } from "react-router-dom";


import BidPage from "../pages/liveBid";
import LoginForm from "../pages/LoginPage";

import UserInfoFormWrappedComponent from '../pages/userProfilePage';

import history from "../reducers/history";

import { connect } from 'react-redux';

import React, { useEffect } from 'react';


import "../sass/main.scss";
import { checkUserSignIn, fetchCurrentUser } from "../actions";


const App = (props) => {
  useEffect(() => {
    // props.fetchCurrentUser();
    props.checkUserSignIn();
  }, []);

  // console.log(props.isCurrentUserAuthenticatedData.isCurrentUserAuthenticated)


  return (
    <div>
      <Router history={history}>
          <div>
            <Switch>

              <Route path = "/auth/myAccount" component={UserInfoFormWrappedComponent} />

              <Route path = "/auth/userLogin" exact component = {LoginForm} />

              <Route path = "/" exact component = {BidPage} />

            </Switch>
          </div>
      </Router>
      
    </div>
  );
  // }
}


// const mapStateToProps = state => {
//   return {
//     isCurrentUserAuthenticatedData: state.currentUserProfile
//   };
// };

// export default App;
export default connect( null, { fetchCurrentUser, checkUserSignIn })(App);
