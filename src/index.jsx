import React from "react";
import {render} from "react-dom";
import configureStore from "./app/store/ConfigureStore";
import Root from "./app/Root";

//configureFakeBackend();
const store = configureStore();

render(
    <Root store={store}/>,
    document.getElementById('app')
);