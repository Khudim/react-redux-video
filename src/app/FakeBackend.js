// array in local storage for registered users

export const host = 'http://127.0.0.1:8080';

//export const host = '';

function createVideoResponse() {
    return {
        count: 40,
        items: generateContent()
    }
}

function generateContent() {
    let content = [];
    for (let i = 0; i < 10; i++) {
        content.push({
            contentId: i,
            img: 'http://n1s2.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/940x627_1_5a0bfdc1ca88097a61d2d64668c61ef9@940x627_0xc0a839a4_18087198581488362059.jpeg',
            src: 'https://youtu.be/Mxesac55Puo',
            height: 100,
            width: 180
        })
    }
    return content;
}

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // get content
                if (url.match('/content?') && opts.method === 'GET' || opts.method === 'OPTIONS') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    resolve({ok: true, json: () => createVideoResponse()});
                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}