/** jsonReader service */
function JsonReader($http) {
    this.$http_ = $http;
}

/**
 * Gets the contact data
 * @param  {String} path is the url passed in
 * @return {Object}      promise object
 */
JsonReader.prototype.getJsonData = function(url) {
    var promise = this.$http_({
        method: 'GET',
        url: url
    });

    return promise;
};
