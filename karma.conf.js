module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [ 'tests/**/*.test.js'],
        exclude: [
        ],
        plugins: [
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-phantomjs-launcher'
        ],
        preprocessors: {},
        reporters: ['progress', 'dots', 'junit'],
        junitReporter: {
            outputDir: 'results',
            outputFile: 'test-results.xml',
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true, // add browser name to report and classes names
            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
            properties: {},
            xmlVersion: null // use '1' if reporting to be per SonarQube 6.2 XML format
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};