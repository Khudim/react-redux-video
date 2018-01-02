if ('production' === process.env.NODE_ENV) {
    module.exports = require('./ConfigureStore.prod')
} else {
    module.exports = require('./ConfigureStore.dev')
}
