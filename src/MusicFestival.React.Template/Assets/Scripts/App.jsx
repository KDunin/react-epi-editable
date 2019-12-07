import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageComponentSelector from "./components/PageComponentSelector";
import { TestComponent } from "./components/TestComponent";

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/test" component={TestComponent} />
                    <Route path="*" component={PageComponentSelector} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
