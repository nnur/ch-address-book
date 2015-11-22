// Karma configuration
// Generated on Fri Nov 20 2015 13:44:33 GMT-0800 (PST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // Angular stuff
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            //lodash
            'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.js',
            // src
            'app-module.js',
            'app-routes.js',
            'public/components/main/main-controller.js',
            'public/components/main/main.js',
            'public/common/json-reader/json-reader-service.js',
            'public/common/json-reader/json-reader.js',
            'public/common/sidebar/search-bar/search-bar-directive.js',
            'public/common/sidebar/list-pane/list-pane-directive.js',
            'public/common/sidebar/sidebar.js',
            'public/common/sidebar/search-bar/*.html',

            // tests
            'public/**/*_test.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'public/common/sidebar/search-bar/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            // If your build process changes the path to your templates,
            // use stripPrefix and prependPrefix to adjust it.
            stripPrefix: "public/",

            // the name of the Angular module to create
            moduleName: "addbook.templates"
        },

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity
    });
};
