
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import BidPage from "../pages/liveBid";


import history from "../reducers/history";


import "../sass/main.scss";

const App = props => {

    return (
      <div>
        <Router history={history}>
            <div>
              <Switch>

                <Route path = "/" exact component = {BidPage} />

              </Switch>
            </div>
        </Router>
        
      </div>
    );
  // }
}


export default App;
