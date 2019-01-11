import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserAgent from './pages/user_agent/index';

function BaseRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/user_agent" component={UserAgent} />
      </div>
    </Router>
  );
}

export default BaseRouter;