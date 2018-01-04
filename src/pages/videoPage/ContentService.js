import {host} from "../../app/FakeBackend"

export const contentService = {
    loadAllContent: loadAllContent,
    loadContentById: loadContentById
};

function loadContentById(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    };
    return fetch(host + '/content?id=' + id, requestOptions).then(handleResponse);
}

function loadAllContent(filter) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    };
    return fetch(host + '/content?page=' + filter.page + '&limit=' + filter.limit, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}