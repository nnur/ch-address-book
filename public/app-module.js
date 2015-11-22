/** Declares the main module for this apps */
app = angular.module('addbook', ['addbook.components.main',
    'addbook.common.jsonReader', 'addbook.common.sidebar',
    'addbook.common.contactCard', 'ngRoute'
]);

/**
 * Base url for the app: change in production
 */
app.constant('baseURL', 'http://localhost:8080');
