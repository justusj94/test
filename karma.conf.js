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
        reporters: ['progress', 'junit'],
        junitReporter: {
            outputDir: 'results',
            outputFile: 'TestResults.xml'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};