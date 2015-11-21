app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'components/main/main-view.html',
            controller: 'MainController',
            controllerAs: 'mainCtrl'
        });
});
