function searchBar() {

    function search(query, data) {
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
        return results;
    }

    return {
        scope: {
            searchQuery: '=ngModel',
            originalData: '=original',
            searchResults: '=results'
        },
        templateUrl: 'common/sidebar/search-bar/search-bar.html',
        link: function(scope, elem, attrs) {

            scope.$watch(function() {
                return scope.searchQuery;
            }, function(newVal) {
                scope.searchResults = search(newVal, scope.originalData);
            });
        }

    };
}
