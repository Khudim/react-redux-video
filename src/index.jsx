import React from "react";
import {render} from "react-dom";
import configureStore from "./app/store/ConfigureStore";
import Root from "./app/Root";
import {configureFakeBackend} from "./app/FakeBackend";

configureFakeBackend();
const store = configureStore();

render(
    <Root store={store}/>,
    document.getElementById('app')
);