import React from "react";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import {history} from "./History";
import {Redirect, Route, Router} from "react-router-dom";
import DevTools from "./DevTools";
import {navBar} from "../navbar/NavBar";

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" render={() => (
                    <Redirect to="/index"/>
                )}/>
                <Route path="/index" component={navBar}/>
                <DevTools/>
            </div>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root