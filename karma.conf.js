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

    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      dir: '.',
      reporters: [
        { type: 'text', subdir: 'coverage' },
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' }
      ]
    },

    browserify: {
      debug: true,
      configure: function browserify (bundle) {
        bundle.once('prebundle', function prebundle () {
          bundle.transform('babelify', {presets: ['es2015'], sourceMapsAbsolute: true})
          bundle.transform('coverageify', { ignores: [new RegExp(require('path').join(__dirname, 'spec'))] })
        })
      }
    }
  })
}
