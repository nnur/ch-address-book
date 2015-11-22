/**
 * Contact Card directive for viewing and editing info
 */
function contactCard() {
    return {
        scope: {
            contact: '=contactInfo',
        },
        templateUrl: 'common/contact-card/contact-card.html',
        controller: function($scope) {
            // toggle state on click
            $scope.editMode = "edit";
            $scope.toggleEditMode = function() {
                $scope.editMode = ($scope.editMode === "edit") ? "save" : "edit";
            };
        }
    };
}
