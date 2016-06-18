// Karma configuration
// Generated on Sat Jun 18 2016 23:11:12 GMT+1000 (AUS Eastern Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'main/webapp/bower_components/moment/moment.js',
            'main/webapp/bower_components/angular/angular.js',
            'main/webapp/bower_components/angular-route/angular-route.min.js',
            'main/webapp/bower_components/jquery/dist/jquery.min.js',
            'main/webapp/bower_components/bootstrap/dist/js/bootstrap.min.js',
            'main/webapp/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'main/webapp/js/services.js',
            'main/webapp/js/controller.js',
            'main/webapp/js/app.js',
            'main/webapp/js/directives.js',
            'test/karma/lib/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


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

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],
        junitReporter: {
            outputFile: "test/karma/test_out/unit.xml",
            suite: true
        },

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}