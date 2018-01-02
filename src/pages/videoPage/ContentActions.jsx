import {contentService} from "./ContentService";
import {contentConstants} from "./ContentConstants";

export const contentActions = {
    loadContent: loadContent
};

function loadContent(filter) {
    return dispatch => {
        dispatch(request(filter));

        contentService.loadContent(filter).then(
            response => dispatch(success(response, filter)),
            error => dispatch(failure(error))
        )
    }
}

function request(filter) {
    return {type: contentConstants.CONTENT_LOAD_REQUEST, filter};
}

function success(response, filter) {
    return {type: contentConstants.CONTENT_LOAD_SUCCESS, filter, response}
}

function failure(error) {
    return {type: 'FAIL', error}
}