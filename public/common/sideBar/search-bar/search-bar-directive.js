/**
 * Search Bar directive for searching data
 */
function searchBar() {
    /**
     * searches top level keys
     * @param  {String} query : Search query
     * @param  {Array<Object>} data : Data to be searched
     * @return {Array<Object>} results : Subset of data containing query
     */
    function search(query, data) {
        if (!_.isUndefined(query) && !_.isUndefined(data)) {
            var results = [];
            _.each(data, function(val, key) {
                //search through all keys of object
                _.each(val, function(innerVal, innerKey) {
                    // searches are not case sensitive
                    innerVal = innerVal.toLowerCase();
                    query = query.toLowerCase();

                    if (_(innerVal).contains(query)) {
                        results.push(val);
                        // return to break out of the _each if item is found
                        return false;
                    }
                });
            });
            return (results === []) ? data : results;
        }
    }

    return {
        scope: {
            originalData: '=original',
            searchResults: '=results'
        },
        templateUrl: 'common/sidebar/search-bar/search-bar.html',
        link: function(scope, elem, attrs) {
            // to update searchResults as the user types
            scope.$watch(function() {
                return scope.searchQuery;
            }, function(newQuery) {
                scope.searchResults = search(newQuery, scope.originalData);
            }, true);
        }

    };
}
