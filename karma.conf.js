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
            'phantom',
        ],
        preprocessors: {},
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};