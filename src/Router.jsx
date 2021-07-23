import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from 'react-router-dom';

import { Login,Calculator} from "./templates";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="(/)?" component={Calculator}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;