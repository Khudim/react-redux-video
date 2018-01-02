import {contentConstants} from "./ContentConstants";

let initialState = {
    items: [],
    count: 0,
    filter: {
        page: 0,
        limit: contentConstants.pageSize
    },
    loading: false
};

export function content(state = initialState, action) {
    switch (action.type) {
        case contentConstants.CONTENT_LOAD_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                filter: action.filter
            });
        case contentConstants.CONTENT_LOAD_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                filter: action.filter,
                items: action.response.items,
                count: action.response.count
            });
        default:
            return state
    }
}