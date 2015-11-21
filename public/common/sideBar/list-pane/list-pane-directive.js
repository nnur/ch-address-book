function listPane() {
    return {
        scope: {
            listItems: '=data'
        },
        restrict: 'E',
        templateUrl: 'common/sidebar/list-pane/list-pane.html'
    };
}
