
function errorHandler(response) {
    if (response.ok) {
        return response;
    }
    throw response;
}

const _fetch = window.fetch;
window.fetch = (...args) => {
    return _fetch.apply(this, args).then(errorHandler);
};