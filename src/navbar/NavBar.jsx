import React from "react";
import {Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {Route, Switch} from "react-router-dom";
import {adminPage} from "../pages/adminPage/Admin";
import contentPage from "../pages/videoPage/Content";

export const navBar = ({ match }) => {
    return (
        <div className="container header">
            <Nav className="nav nav-pills pull-right">
                <LinkContainer to={`${match.path}/content`}>
                    <NavItem eventKey={1}>
                        Video Page
                    </NavItem>
                </LinkContainer>
                <LinkContainer to={`${match.path}/admin`}>
                    <NavItem eventKey={2}>
                        Admin Page
                    </NavItem>
                </LinkContainer>
            </Nav>
            <Switch>
                <Route path={`${match.path}/content`} component={contentPage}/>
                <Route path={`${match.path}/admin`} component={adminPage}/>
            </Switch>
        </div>
    )
};