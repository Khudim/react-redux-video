import {contentService} from "./ContentService";
import {contentConstants} from "./ContentConstants";

export const contentActions = {
    loadAllContent: loadAllContent,
    loadContentById: loadContentById
};

function loadAllContent(filter) {
    return dispatch => {
        dispatch(requestAll(filter));

        contentService.loadAllContent(filter).then(
            response => dispatch(success(response, filter)),
            error => dispatch(failure(error))
        )
    }
}

function loadContentById(id) {
    return dispatch => {
        dispatch(requestById(id));

        contentService.loadContentById(id).then(
            response => {
                dispatch(successId(response));
                alert('action response ' + JSON.stringify(response))
                video = response;
            },
            error => dispatch(failure(error))
        )
    }
}

function requestAll(filter) {
    return {type: contentConstants.CONTENT_LOAD_REQUEST, filter};
}

function requestById(id) {
    return {type: contentConstants.CONTENT_ID_REQUEST, id};
}

function success(response, filter) {
    return {type: contentConstants.CONTENT_LOAD_SUCCESS, filter, response}
}

function successId(response, id) {
    return {type: contentConstants.CONTENT_ID_SUCCESS, id, response}
}

function failure(error) {
    return {type: 'FAIL', error}
}