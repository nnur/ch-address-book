/**
 * List Pane directive for displaying list info and managing clicks
 */
function listPane() {
    return {
        scope: {
            listItems: '=data',
            selected: '=onSelected' // passed in click handler
        },
        restrict: 'E',
        templateUrl: 'common/sidebar/list-pane/list-pane.html',
        controller: function($scope) {
            // call handler on click
            $scope.onclick = function(item) {
                $scope.selected(item);
            };
        }
    };
}
