import {combineReducers} from 'redux';
import {content} from "../pages/videoPage/ContentReducer";


const rootReducer = combineReducers({
    content
});

export default rootReducer;