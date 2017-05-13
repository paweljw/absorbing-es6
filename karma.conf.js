module.exports = function (config) {
  config.set({
    frameworks: ['browserify', 'jasmine'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'spec/**/*_spec.js'
    ],

    browsers: ['PhantomJS'],

    preprocessors: {
      'spec/**/*.js': ['browserify']
    },

    reporters: ['mocha'],

    browserify: {
      debug: true,
      configure: function browserify (bundle) {
        bundle.once('prebundle', function prebundle () {
          bundle.transform('babelify', {presets: ['es2015']})
        })
      }
    }
  })
}
