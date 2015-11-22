function contactCard() {
    return {
        scope: {
            contact: '=contactInfo',
        },
        templateUrl: 'common/contact-card/contact-card.html',
        controller: function($scope) {

            $scope.editMode = "edit";
            $scope.toggleEditMode = function() {
                $scope.editMode = ($scope.editMode === "edit") ? "save" : "edit";
            };
        }
    };
}
