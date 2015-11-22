function listPane() {
    return {
        scope: {
            listItems: '=data',
            selected: '=onSelected'
        },
        restrict: 'E',
        templateUrl: 'common/sidebar/list-pane/list-pane.html',
        controller: function($scope) {

            $scope.onclick = function(item) {
                $scope.selected(item);
            };
        }
    };
}
