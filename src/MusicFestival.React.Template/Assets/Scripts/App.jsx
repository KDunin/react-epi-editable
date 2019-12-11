import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageComponentSelector from "./components/PageComponentSelector";

const App = () => (
    <Router>
        <Switch>
            <Route path="*" component={PageComponentSelector} />
        </Switch>
    </Router>
);

export default App;
