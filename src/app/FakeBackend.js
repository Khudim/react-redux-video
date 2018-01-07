// array in local storage for registered users

export const host = 'http://localhost:80';

//export const host = '';

function createContentResponse() {
    const count = 20;
    return {
        count: count,
        content: generateContent(count)
    }
}
let urls = ['http://arhivach.org/storage3/f/a0/fa04412dcc9b51fa486a95a8578a0bad.webm', 'http://arhivach.org/storage/5/e3/5e3d385cf0f450efef45119bcfacfcaa.webm'];

function generateContent(count) {
    let content = [];
    for (let i = 0; i < count; i++) {
        content.push(
            createContentById(i)
        );
    }
    return content;
}

function createContentById(id) {
    return {
        contentId: id,
        img: 'http://n1s2.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/940x627_1_5a0bfdc1ca88097a61d2d64668c61ef9@940x627_0xc0a839a4_18087198581488362059.jpeg',
        src: urls[id % 2],
        height: 100,
        width: 180
    }
}

export function configureFakeBackend() {
    let realFetch = window.fetch;

    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // get all content
                if (url.match('/content\\?page=') && opts.method === 'GET' || opts.method === 'OPTIONS') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    resolve({ok: true, json: () => createContentResponse()});
                    return;
                }

                // get content by id
                if (url.match('/content\\?id=') && opts.method === 'GET' || opts.method === 'OPTIONS') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    resolve({ok: true, json: () => createContentById(55)});
                    return;
                }
                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}