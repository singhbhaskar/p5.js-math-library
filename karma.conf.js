module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'node_modules/p5/lib/p5.min.js',
      'src/index.js',
      'src/**/*_test.js',
    ],
    preprocessors: {
      'src/index.js': ['webpack'],
    },
    webpack: {
      // TODO: This is duplication of the webpack.common.babel.js file, but they
      // use different import syntaxes so it's not easy to just require it here.
      // Maybe this could be put into a JSON file, but the include in the module
      // rules is dynamic.
      entry: ['babel-polyfill', './src/index.js'],
      output: {
        libraryTarget: 'umd',
        filename: 'p5.math.js',
        library: 'p5.math',
      },
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            include: require('path').resolve(__dirname, 'src'),
          },
        ],
      },
      // Don't minify the webpack build for better stack traces
      optimization: {
        minimize: false,
      },
    },
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only',
    },
    browserStack: {
      username: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY
    },
    captureTimeout: 120000,
    reportSlowerThan: 500,
    browserNoActivityTimeout: 180000,
    customLaunchers: {
      bs_chrome_mac: {
        base: 'BrowserStack',
        browser: 'chrome',
        browser_version: 'latest',
        os: 'OS X',
        os_version: 'High Sierra'
      },
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};
