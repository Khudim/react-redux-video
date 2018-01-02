import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from '../RootReducer'
import DevTools from '../DevTools'
import {loadState, saveState} from "./LocaleStorage";


const configureStore = () => {
    const store = createStore(
        rootReducer,
        loadState(),
        compose(
            applyMiddleware(thunk, createLogger()),
            DevTools.instrument()
        )
    );

    store.subscribe(() => {
        saveState({
            translate: store.getState().translate,
            user: store.getState().user
        });
    });

    return store
};

export default configureStore
