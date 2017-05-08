module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'spec/**/*_spec.js'
    ],

    preprocessors: {
      'spec/**/*.js': ['webpack']
    },
    browsers: ['PhantomJS2'],
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      watch: true
    }
  })
}
