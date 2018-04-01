import {contentConstants} from "./ContentConstants";

let initialState = {
    items: [],
    count: 0,
    filter: {
        page: 0,
        limit: contentConstants.PAGE_SIZE,
        hasMore: true
    },
    loading: false
};

export function content(state = initialState, action) {
    switch (action.type) {
        case contentConstants.CONTENT_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
                filter: action.filter
            };
        case contentConstants.CONTENT_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                filter: action.filter,
                items: state.items.length > contentConstants.CONTENT_LIMIT
                    ? state.items.slice(contentConstants.PAGE_SIZE, state.items.length).concat(action.response.content)
                    : state.items.concat(action.response.content),
                count: action.response.count
            };
        case contentConstants.CONTENT_ID_REQUEST:
            return {
                ...state,
            };
        case contentConstants.CONTENT_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.push(action.response)
            };
        default:
            return state
    }
}