import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "../RootReducer";

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk)
);

export default configureStore
