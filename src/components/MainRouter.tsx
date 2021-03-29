import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Nav from './Nav';

import  { openWeather } from "./openWeather";
import Todo from "./Todo";
export class MainRouter extends Component {
    render() {
        return (
          <div>
            <BrowserRouter>
              <Nav/>
              <Switch>
                <Route path="/todo" exact component={Todo} />
                <Route path="/openweather" component={openWeather} />
              </Switch>
            </BrowserRouter>
          </div>
        );
    }
}

export default MainRouter
