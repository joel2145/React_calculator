import React from "react";
import { Route, Switch } from "react-router";

import { Calculator } from "./Calculator";
import { Login } from "./Login";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="(/)?" component={Calculator}/>
        </Switch>
    )
}

export default Router;