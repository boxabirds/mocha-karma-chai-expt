module.exports = function(config) {
    config.set({
      frameworks: ['mocha', 'chai'],
      files: [
        // Specify your test files here
        'matrix-component.test.js'
      ],
      preprocessors: {
        // Add preprocessors as needed
        'matrix-component.test.js': ['webpack']
      },
      webpack: {
        // webpack configuration
        mode: 'development',
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
        }
      },
    reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['ChromeHeadless'],
      singleRun: false,
      concurrency: Infinity
    });
  };
  